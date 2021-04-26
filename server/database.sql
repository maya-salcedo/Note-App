-- CREATE DATABASE IF NOT EXISTS note_database;

-- c\ note_database

CREATE TABLE notes(
    id SERIAL PRIMARY KEY,
    title VARCHAR(10000),
    content VARCHAR(100000) NOT NULL
);