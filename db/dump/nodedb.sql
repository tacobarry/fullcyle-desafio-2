--
-- Create a database using `MYSQL_DATABASE` placeholder
--
CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
--

DROP TABLE IF EXISTS people;
CREATE TABLE people(id int NOT NULL auto_increment primary key, name varchar(255) NOT NULL);
INSERT INTO people(name) values ('Tacobarry');
