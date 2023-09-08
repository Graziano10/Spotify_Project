CREATE DATABASE IF NOT EXISTS SpotyProject;

--set extention in terminal  (create extension if not exists "uuid-ossp";)
CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  user_name VARCHAR (255),
  user_email VARCHAR (255) NOT NULL,
  user_password VARCHAR (255) NOT NULL
);