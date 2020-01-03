DROP DATABASE IF EXISTS lounge;
-- Creates the "blogger" database --
CREATE DATABASE lounge;

USE lounge;

CREATE TABLE users (
  id Int( 1000 ) AUTO_INCREMENT NOT NULL,
  username VARCHAR( 255) NOT NULL,
  password VARCHAR( 255 ) NOT NULL,
active boolean,
  PRIMARY KEY ( id ) 
);

CREATE TABLE sessions (
  id Int( 1000 ) AUTO_INCREMENT NOT NULL,
  user_id INT(1000) NOT NULL,
  lounge_id INT( 1000 ) NOT NULL,
active boolean,
  PRIMARY KEY ( id ) 
);


CREATE TABLE lounge (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  name VARCHAR( 255) NOT NULL,
  created_at DATETIME NOT NULL,
  PRIMARY KEY ( id ) 
);

CREATE TABLE songs (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  songname VARCHAR( 255) NOT NULL,
  source VARCHAR(255) NOT NULL,
  upvote INT(1000) NOT NULL,
downvote INT(1000) NOT NULL,
user_id  int(1000),
  PRIMARY KEY ( id ) 
);

CREATE TABLE playlist (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
song_id  int(1000) NOT NULL,
lounge_id  int(1000) NOT NULL,
  PRIMARY KEY ( id ) 
);