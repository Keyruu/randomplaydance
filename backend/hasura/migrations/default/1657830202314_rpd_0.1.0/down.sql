
alter table "rpd"."playlists" rename column "created_by_id" to "created_by";


alter table "rpd"."playlists" rename to "playlist";


ALTER TABLE "rpd"."parts" ALTER COLUMN "youtube_id" TYPE integer;

alter table "rpd"."parts" rename column "created_by_id" to "created_by";

DROP TABLE "rpd"."playlist_parts";

DROP TABLE "rpd"."playlist";

DROP TABLE "rpd"."parts";
