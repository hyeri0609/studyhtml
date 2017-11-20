CREATE TABLE pictures (
    pic_id uuid NOT NULL,
    pic_bytea bytea NOT NULL,
    pic_text text NULL,
    --blob?
    created_date timestamp without time zone NOT NULL,
    user_id uuid NOT NULL
);