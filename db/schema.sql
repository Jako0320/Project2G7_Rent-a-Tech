DROP DATABASE IF EXISTS RENT_A_TECH_db;
CREATE DATABASE RENT_A_TECH_db;

USE RENT_A_TECH_db;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users VALUES (1,'Maddie Hill', 'muzamil@gmail.com', '1234rob');
INSERT INTO users VALUES (2,'Anthony Horta', 'horton@gmail.com', 'eagles23');
INSERT INTO users VALUES (3,'Andrea Wiggins', 'Wiggins_A@gmail.com', 'Treau65');
INSERT INTO users VALUES (4,'Jazmin Santiago', 'Santiago_j@gmail.com', 'angel11');
INSERT INTO users VALUES (5,'Danny Cardona', 'Cali_colombo@gmail.com', 'tusi78');
INSERT INTO users VALUES (6,'Delmi Delrosario', 'Rosario_D@gmail.com', 'Latte76');
INSERT INTO users VALUES (7,'Emily Pereira', 'Epereira@gmail.com', 'silverh7');
INSERT INTO users VALUES (8,'Star Lopez', 'Star_light@gmail.com', 'superstar6');
INSERT INTO users VALUES (9,'Julio Serrano', 'Serrano@gmail.com', 'kryton8');
INSERT INTO users VALUES (10,'Michelle Rankin', 'Rankite@gmail.com', 'Twighli4');
INSERT INTO users VALUES (11,'Bernabe Diaz', 'frijol.@gmail.com', 'guate45');
INSERT INTO users VALUES (12,'Molly Fisher', 'fisher_m@gmail.com', 'babykitty');
INSERT INTO users VALUES (13,'Noly Garcia', 'Gaby_noly@gmail.com', 'Noah6');
INSERT INTO users VALUES (14,'Matt Evert', 'navy@gmail.com', 'Battle90');
INSERT INTO users VALUES (15,'Enio Lopez', 'Lopez_E@gmail.com', 'Titan67');
INSERT INTO users VALUES (16,'Stephanie Cabrera', 'Star_bucks@gmail.com', 'Frappe333');
INSERT INTO users VALUES (17,'Nano Rodriguez', 'Santurce_pr@gmail.com', 'Cerra99');
INSERT INTO users VALUES (18,'Kyle Goodwin', 'Godwing@gmail.com', 'Freshwing22');
INSERT INTO users VALUES (19,'Bryan Aguliar', 'Cole_br@gmail.com', 'Davvd88');
INSERT INTO users VALUES (20,'Kelly London', 'Kpop20@gmail.com', 'Kbanda3');
INSERT INTO users VALUES (21,'Justin Beckford', 'Naruto_H@gmail.com', 'Rasgn0');

CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO technicians VALUES (1,'Allen Ramcharam', 'allen_ra@gmail.com', '564opt');
INSERT INTO technicians VALUES (2,'Cameron Lee', 'Leeman@gmail.com', '564opt');
INSERT INTO technicians VALUES (3,'Michael Everett', 'everett_m@gmail.com', 'Marine45');
INSERT INTO technicians VALUES (4,'Mike Rennie', 'Rennigade@gmail.com', 'toylex45');
INSERT INTO technicians VALUES (5,'Brandon Degarmo', 'italy_pr@gmail.com', 'cod32');
INSERT INTO technicians VALUES (6,'Brandon Godoy', 'Brandon_gdy@yahoo.com', 'chiko');
INSERT INTO technicians VALUES (7,'Jason Defrietas', 'defreitas@gmail.com', 'skate45');
INSERT INTO technicians VALUES (8,'Erick Rodriguez', 'rodriguez_e@gmail.com', 'Honda98');
INSERT INTO technicians VALUES (9,'Pierre Williams ', 'dbz@gmail.com', 'Goku77');
INSERT INTO technicians VALUES (10,'Vinny Harney', 'vencent_h@gmail.com', 'ricopic7');
INSERT INTO technicians VALUES (11,'Tim Celestine', 'celestine@gmail.com', 'LEXman23');
INSERT INTO technicians VALUES (12,'Taylor Glanding', 'glando@gmail.com', '696975');
INSERT INTO technicians VALUES (13,'Jori Suarez', 'Finland_pr@gmail.com', 'Calle1!');
INSERT INTO technicians VALUES (14,'Cj Glanding', 'Brody_g@gmail.com', '564opt');
INSERT INTO technicians VALUES (15,'Mike Basteo', 'dirtbike_mike@gmail.com', '2Stroke');
INSERT INTO technicians VALUES (16,'Edward Degarmo', 'Degarmo_mo@gmail.com', 'Havelot65');
INSERT INTO technicians VALUES (17,'Steve Brodback', 'Tundra_23@gmail.com', 'YOTa1!');
INSERT INTO technicians VALUES (18,'Zachary Glanding', 'statey_nj@gmail.com', 'Trooper55');
INSERT INTO technicians VALUES (19,'Laquan Jones', 'murkem_L@gmail.com', 'LANJ2023');
INSERT INTO technicians VALUES (20,'Jeff Hidalgo', 'Civic_H@gmail.com', 'Shiftr6');
INSERT INTO technicians VALUES (21,'Jeff Solares', 'Sol_res@gmail.com', 'Tact321');

CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technician_id INT NOT NULL,
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (tech_id) REFERENCES technicians(id)
);