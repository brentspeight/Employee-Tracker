DROP DATABASE IF EXISTS companyDB;
CREATE database companyDB;

USE companyDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) null,
  PRIMARY KEY (id)
);
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) null,
  salary DECIMAL null,
  department_id INT null, 
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) null,
  last_name VARCHAR(30) null,
  role_id INT null, 
  manager_id INT null,
  PRIMARY KEY (id)
);