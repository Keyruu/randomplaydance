


CREATE TABLE "rpd"."parts" ("id" serial NOT NULL, "created_by" uuid NOT NULL, "youtube_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "start_seconds" integer NOT NULL, "end_seconds" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("created_by") REFERENCES "auth"."users"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "rpd"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_rpd_parts_updated_at"
BEFORE UPDATE ON "rpd"."parts"
FOR EACH ROW
EXECUTE PROCEDURE "rpd"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_rpd_parts_updated_at" ON "rpd"."parts" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "rpd"."playlist" ("id" serial NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name" text NOT NULL, "public" boolean NOT NULL DEFAULT true, "created_by" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("created_by") REFERENCES "auth"."users"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "rpd"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_rpd_playlist_updated_at"
BEFORE UPDATE ON "rpd"."playlist"
FOR EACH ROW
EXECUTE PROCEDURE "rpd"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_rpd_playlist_updated_at" ON "rpd"."playlist" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "rpd"."playlist_parts" ("id" serial NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "part_id" integer NOT NULL, "playlist_id" integer NOT NULL, "position" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("part_id") REFERENCES "rpd"."parts"("id") ON UPDATE restrict ON DELETE cascade, FOREIGN KEY ("playlist_id") REFERENCES "rpd"."playlist"("id") ON UPDATE restrict ON DELETE cascade);

alter table "rpd"."parts" rename column "created_by" to "created_by_id";

ALTER TABLE "rpd"."parts" ALTER COLUMN "youtube_id" TYPE text;

alter table "rpd"."playlist" rename to "playlists";

alter table "rpd"."playlists" rename column "created_by" to "created_by_id";
