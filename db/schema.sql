CREATE DATABASE RENT_A_TECH
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Allen Ramcharam', 'muzamil@gmail.com', '1234rob')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );
