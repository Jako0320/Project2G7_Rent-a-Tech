CREATE DATABASE RENT_A_TECH
USE RENT_A_TECH;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Maddie Hill', 'muzamil@gmail.com', '1234rob');
Insert into users values(3,'Karen Estrada', 'Kstrada@gmail.com', 'strato54');
Insert into users values(3,'Anthony Horta', 'horton@gmail.com', 'eagles23');
Insert into users values(3,'Andrea Wiggins', 'Wiggins_A@gmail.com', 'Treau65');
Insert into users values(3,'Jazmin Santiago', 'Santiago_j@gmail.com', 'angel11');
Insert into users values(3,'Danny Cardona', 'Cali_colombo@gmail.com', 'tusi78');
Insert into users values(3,'Delmi Delrosario', 'Rosario_D@gmail.com', 'Latte76');
Insert into users values(3,'Emily Pereira', 'Epereira@gmail.com', 'silverh7');
Insert into users values(3,'Star Lopez', 'Star_light@gmail.com', 'superstar6');
Insert into users values(3,'Julio Serrano', 'Serrano@gmail.com', 'kryton8');
Insert into users values(3,'Michelle Rankin', 'Rankite@gmail.com', 'Twighli4');
Insert into users values(3,'Bernabe Diaz', 'frijol.@gmail.com', 'guate45');
Insert into users values(3,'Molly Fisher', 'fisher_m@gmail.com', 'babykitty');
Insert into users values(3,'Noly Garcia', 'Gaby_noly@gmail.com', 'Noah6');
Insert into users values(3,'Matt Evert', 'navy@gmail.com', 'Battle90');
Insert into users values(3,'Enio Lopez', 'Lopez_E@gmail.com', 'Titan67');
Insert into users values(3,'Stephanie Cabrera', 'Star_bucks@gmail.com', 'Frappe333');
Insert into users values(3,'Nano Rodriguez', 'Santurce_pr@gmail.com', 'Cerra99');
Insert into users values(3,'Kyle Goodwin', 'Godwing@gmail.com', 'Freshwing22');
Insert into users values(3,'Bryan Aguliar', 'Cole_br@gmail.com', 'Davvd88');
Insert into users values(3,'Kelly London', 'Kpop20@gmail.com', 'Kbanda3');
Insert into users values(3,'Justin Beckford', 'Naruto_H@gmail.com', 'Rasgn0');


CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

Insert into technicians values(3,'Allen Ramcharam', 'allen_ra@gmail.com', '564opt');
Insert into technicians values(3,'Alvaro Perez', 'ale_65@gmail.com', 'Futbol1');
Insert into technicians values(3,'Cameron Lee', 'Leeman@gmail.com', '564opt');
Insert into technicians values(3,'Michael Everett', 'everett_m@gmail.com', 'Marine45');
Insert into technicians values(3,'Mike Rennie', 'Rennigade@gmail.com', 'toylex45');
Insert into technicians values(3,'Brandon Degarmo', 'italy_pr@gmail.com', 'cod32');
Insert into technicians values(3,'Brandon Godoy', 'Brandon_gdy@yahoo.com', 'chiko');
Insert into technicians values(3,'Jason Defrietas', 'defreitas@gmail.com', 'skate45');
Insert into technicians values(3,'Erick Rodriguez', 'rodriguez_e@gmail.com', 'Honda98');
Insert into technicians values(3,'Pierre Williams ', 'dbz@gmail.com', 'Goku77');
Insert into technicians values(3,'Vinny Harney', 'vencent_h@gmail.com', 'ricopic7');
Insert into technicians values(3,'Tim Celestine', 'celestine@gmail.com', 'LEXman23');
Insert into technicians values(3,'Taylor Glanding', 'glando@gmail.com', '696975');
Insert into technicians values(3,'Jori Suarez', 'Finland_pr@gmail.com', 'Calle1!');
Insert into technicians values(3,'Cj Glanding', 'Brody_g@gmail.com', '564opt');
Insert into technicians values(3,'Mike Basteo', 'dirtbike mike@gmail.com', '2Stroke');
Insert into technicians values(3,'Edward Degarmo', 'Degarmo_mo@gmail.com', 'Havelot65');
Insert into technicians values(3,'Steve Brodback', 'Tundra_23@gmail.com', 'YOTa1!');
Insert into technicians values(3,'Zachary Glanding', 'statey_nj@gmail.com', 'Trooper55');
Insert into technicians values(3,'Laquan Jones', 'murkem_L@gmail.com', 'LANJ2023');
Insert into technicians values(3,'Jeff Hidalgo', 'Civic_H@gmail.com', 'Shiftr6');
Insert into technicians values(3,'Jeff Solares', 'Sol_res@gmail.com', 'Tact321');


CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (tech_id) REFERENCES technicians(id)
  );