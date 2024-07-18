
DROP DATABASE IF EXISTS recipe_app;
CREATE DATABASE recipe_app;

\c recipe_app;

CREATE TABLE recipes (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "image" TEXT,
  "ingredients" TEXT[] NOT NULL,
  "instructions" TEXT[] NOT NULL,
  "serving" INTEGER ,
  "prepare_time" INTEGER,
  "is_favorite" BOOLEAN DEFAULT FALSE
);

