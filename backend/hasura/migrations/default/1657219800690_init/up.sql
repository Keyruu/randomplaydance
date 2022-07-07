SET check_function_bodies = false;
CREATE SCHEMA auth;
COMMENT ON SCHEMA auth IS 'Schema required by Hasura Auth to work. Don''t modify its structure as Hasura Auth relies on it to function properly.';
CREATE SCHEMA storage;
CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
CREATE DOMAIN auth.email AS public.citext
	CONSTRAINT email_check CHECK ((VALUE OPERATOR(public.~) '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'::public.citext));
CREATE FUNCTION auth.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := new;
  _new. "updated_at" = now();
  RETURN _new;
END;
$$;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
declare _new record;
begin _new := new;
_new."updated_at" = now();
return _new;
end;
$$;
CREATE FUNCTION storage.protect_default_bucket_delete() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF OLD.ID = 'default' THEN
    RAISE EXCEPTION 'Can not delete default bucket';
  END IF;
  RETURN OLD;
END;
$$;
CREATE FUNCTION storage.protect_default_bucket_update() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF OLD.ID = 'default' AND NEW.ID <> 'default' THEN
    RAISE EXCEPTION 'Can not rename default bucket';
  END IF;
  RETURN NEW;
END;
$$;
CREATE FUNCTION storage.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := new;
  _new. "updated_at" = now();
  RETURN _new;
END;
$$;
CREATE TABLE auth.migrations (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    hash character varying(40) NOT NULL,
    executed_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE auth.migrations IS 'Internal table for tracking migrations. Don''t modify its structure as Hasura Auth relies on it to function properly.';
CREATE TABLE auth.provider_requests (
    id uuid NOT NULL,
    options jsonb
);
COMMENT ON TABLE auth.provider_requests IS 'Oauth requests, inserted before redirecting to the provider''s site. Don''t modify its structure as Hasura Auth relies on it to function properly.';
CREATE TABLE auth.providers (
    id text NOT NULL
);
COMMENT ON TABLE auth.providers IS 'List of available Oauth providers. Don''t modify its structure as Hasura Auth relies on it to function properly.';
CREATE TABLE auth.refresh_tokens (
    refresh_token uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    expires_at timestamp with time zone NOT NULL,
    user_id uuid NOT NULL
);
COMMENT ON TABLE auth.refresh_tokens IS 'User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don''t modify its structure as Hasura Auth relies on it to function properly.';
CREATE TABLE auth.roles (
    role text NOT NULL
);
COMMENT ON TABLE auth.roles IS 'Persistent Hasura roles for users. Don''t modify its structure as Hasura Auth relies on it to function properly.';
CREATE TABLE auth.user_authenticators (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    credential_id text NOT NULL,
    credential_public_key bytea,
    counter bigint DEFAULT 0 NOT NULL,
    transports character varying(255) DEFAULT ''::character varying NOT NULL
);
COMMENT ON TABLE auth.user_authenticators IS 'User webauthn authenticators. Don''t modify its structure as Hasura Auth relies on it to function properly.';
CREATE TABLE auth.user_providers (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id uuid NOT NULL,
    access_token text NOT NULL,
    refresh_token text,
    provider_id text NOT NULL,
    provider_user_id text NOT NULL
);
COMMENT ON TABLE auth.user_providers IS 'Active providers for a given user. Don''t modify its structure as Hasura Auth relies on it to function properly.';
CREATE TABLE auth.user_roles (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id uuid NOT NULL,
    role text NOT NULL
);
COMMENT ON TABLE auth.user_roles IS 'Roles of users. Don''t modify its structure as Hasura Auth relies on it to function properly.';
CREATE TABLE auth.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    last_seen timestamp with time zone,
    disabled boolean DEFAULT false NOT NULL,
    display_name text DEFAULT ''::text NOT NULL,
    avatar_url text DEFAULT ''::text NOT NULL,
    locale character varying(2) NOT NULL,
    email auth.email,
    phone_number text,
    password_hash text,
    email_verified boolean DEFAULT false NOT NULL,
    phone_number_verified boolean DEFAULT false NOT NULL,
    new_email auth.email,
    otp_method_last_used text,
    otp_hash text,
    otp_hash_expires_at timestamp with time zone DEFAULT now() NOT NULL,
    default_role text DEFAULT 'user'::text NOT NULL,
    is_anonymous boolean DEFAULT false NOT NULL,
    totp_secret text,
    active_mfa_type text,
    ticket text,
    ticket_expires_at timestamp with time zone DEFAULT now() NOT NULL,
    metadata jsonb,
    webauthn_current_challenge text,
    CONSTRAINT active_mfa_types_check CHECK (((active_mfa_type = 'totp'::text) OR (active_mfa_type = 'sms'::text)))
);
COMMENT ON TABLE auth.users IS 'User account information. Don''t modify its structure as Hasura Auth relies on it to function properly.';
CREATE TABLE storage.buckets (
    id text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    download_expiration integer DEFAULT 30 NOT NULL,
    min_upload_file_size integer DEFAULT 1 NOT NULL,
    max_upload_file_size integer DEFAULT 50000000 NOT NULL,
    cache_control text DEFAULT 'max-age=3600'::text,
    presigned_urls_enabled boolean DEFAULT true NOT NULL,
    CONSTRAINT download_expiration_valid_range CHECK (((download_expiration >= 1) AND (download_expiration <= 604800)))
);
CREATE TABLE storage.files (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    bucket_id text DEFAULT 'default'::text NOT NULL,
    name text,
    size integer,
    mime_type text,
    etag text,
    is_uploaded boolean DEFAULT false,
    uploaded_by_user_id uuid
);
CREATE TABLE storage.schema_migrations (
    version bigint NOT NULL,
    dirty boolean NOT NULL
);
ALTER TABLE ONLY auth.migrations
    ADD CONSTRAINT migrations_name_key UNIQUE (name);
ALTER TABLE ONLY auth.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);
ALTER TABLE ONLY auth.provider_requests
    ADD CONSTRAINT provider_requests_pkey PRIMARY KEY (id);
ALTER TABLE ONLY auth.providers
    ADD CONSTRAINT providers_pkey PRIMARY KEY (id);
ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (refresh_token);
ALTER TABLE ONLY auth.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role);
ALTER TABLE ONLY auth.user_authenticators
    ADD CONSTRAINT user_authenticators_credential_id_key UNIQUE (credential_id);
ALTER TABLE ONLY auth.user_authenticators
    ADD CONSTRAINT user_authenticators_pkey PRIMARY KEY (id);
ALTER TABLE ONLY auth.user_providers
    ADD CONSTRAINT user_providers_pkey PRIMARY KEY (id);
ALTER TABLE ONLY auth.user_providers
    ADD CONSTRAINT user_providers_provider_id_provider_user_id_key UNIQUE (provider_id, provider_user_id);
ALTER TABLE ONLY auth.user_providers
    ADD CONSTRAINT user_providers_user_id_provider_id_key UNIQUE (user_id, provider_id);
ALTER TABLE ONLY auth.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY auth.user_roles
    ADD CONSTRAINT user_roles_user_id_role_key UNIQUE (user_id, role);
ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_phone_number_key UNIQUE (phone_number);
ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY storage.buckets
    ADD CONSTRAINT buckets_pkey PRIMARY KEY (id);
ALTER TABLE ONLY storage.files
    ADD CONSTRAINT files_pkey PRIMARY KEY (id);
ALTER TABLE ONLY storage.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);
CREATE TRIGGER set_auth_user_providers_updated_at BEFORE UPDATE ON auth.user_providers FOR EACH ROW EXECUTE FUNCTION auth.set_current_timestamp_updated_at();
CREATE TRIGGER set_auth_users_updated_at BEFORE UPDATE ON auth.users FOR EACH ROW EXECUTE FUNCTION auth.set_current_timestamp_updated_at();
CREATE TRIGGER check_default_bucket_delete BEFORE DELETE ON storage.buckets FOR EACH ROW EXECUTE FUNCTION storage.protect_default_bucket_delete();
CREATE TRIGGER check_default_bucket_update BEFORE UPDATE ON storage.buckets FOR EACH ROW EXECUTE FUNCTION storage.protect_default_bucket_update();
CREATE TRIGGER set_storage_buckets_updated_at BEFORE UPDATE ON storage.buckets FOR EACH ROW EXECUTE FUNCTION storage.set_current_timestamp_updated_at();
CREATE TRIGGER set_storage_files_updated_at BEFORE UPDATE ON storage.files FOR EACH ROW EXECUTE FUNCTION storage.set_current_timestamp_updated_at();
ALTER TABLE ONLY auth.users
    ADD CONSTRAINT fk_default_role FOREIGN KEY (default_role) REFERENCES auth.roles(role) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY auth.user_providers
    ADD CONSTRAINT fk_provider FOREIGN KEY (provider_id) REFERENCES auth.providers(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY auth.user_roles
    ADD CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES auth.roles(role) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY auth.user_providers
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY auth.user_roles
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY auth.user_authenticators
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY storage.files
    ADD CONSTRAINT fk_bucket FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id) ON UPDATE CASCADE ON DELETE CASCADE;
