CREATE DATABASE RENT_A_TECH
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Maddie Hill', 'muzamil@gmail.com', '1234rob')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into technicians values(3,'Allen Ramcharam', 'allen_ra@gmail.com', '564opt')
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );
  CREATE DATABASE RENT_A_TECH
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Karen Estrada', 'Kstrada@gmail.com', 'strato54')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into technicians values(3,'Cameron Lee', 'Leeman@gmail.com', '564opt')
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );CREATE DATABASE RENT_A_TECH
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Anthony Horta', 'horton@gmail.com', 'eagles23')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into technicians values(3,'Alvaro Perez', 'ale_65@gmail.com', 'Futbol1')
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );CREATE DATABASE RENT_A_TECH
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Andrea Wiggins', 'Wiggins_A@gmail.com', 'Treau65')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into technicians values(3,'Michael Everett', 'everett_m@gmail.com', 'Marine45')
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );
CREATE DATABASE RENT_A_TECH
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Jazmin Santiago', 'Santiago_j@gmail.com', 'angel11')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into technicians values(3,'Mike Rennie', 'Rennigade@gmail.com', 'toylex45')
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );
  CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Danny Cardona', 'Cali_colombo@gmail.com', 'tusi78')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into technicians values(3,'Brandon Degarmo', 'italy_pr@gmail.com', 'cod32')
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );
  CREATE DATABASE RENT_A_TECH
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Delmi Delrosario', 'Rosario_D@gmail.com', 'Latte76')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into technicians values(3,'Brandon Godoy', 'Brandon_gdy@yahoo.com', 'chiko')
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );CREATE DATABASE RENT_A_TECH
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Emily Pereira', 'Epereira@gmail.com', 'silverh7')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into technicians values(3,'Jason Defrietas', 'defreitas@gmail.com', 'skate45')
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );CREATE DATABASE RENT_A_TECH
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Star Lopez', 'Star_light@gmail.com', 'superstar6')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into technicians values(3,'Erick Rodriguez', 'rodriguez_e@gmail.com', 'Honda98')
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );
CREATE DATABASE RENT_A_TECH
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into users values(3,'Julio Serrano', 'Serrano@gmail.com', 'kryton8')
CREATE TABLE technicians (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
Insert into technicians values(3,'Vinny Harney', 'vencent_h@gmail.com', 'ricopic7')
CREATE TABLE workorders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  technicians_id INT NOT NULL,
 booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (technicians_id) REFERENCES technicians(id)
  );
