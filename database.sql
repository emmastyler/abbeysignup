CREATE DATABASE abbey;

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    password TEXT
);
