-- db/schema.sql
DROP DATABASE IF EXISTS recipe_app;
CREATE DATABASE recipe_app;

\c recipe_app;

CREATE TABLE recipes (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "image" TEXT,
  "ingredients" TEXT ARRAY NOT NULL,
  "instructions" TEXT ARRAY NOT NULL,
  "serving" INTEGER ,
  "prepare_time" INTEGER,
  "is_favorite" BOOLEAN DEFAULT FALSE
);