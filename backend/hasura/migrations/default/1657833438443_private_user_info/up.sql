CREATE VIEW keycloak.user_private AS
  SELECT id AS user_id, email, first_name, last_name, email_verified, created_timestamp
    FROM keycloak.user_entity;