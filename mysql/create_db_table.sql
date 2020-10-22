-- Create database
CREATE DATABASE `testdb`

-- Create table
CREATE TABLE `testdb`.`users` 
	(
        `id` INT AUTO_INCREMENT PRIMARY KEY, 
        `username` VARCHAR(50) NOT NULL, 
        `email` VARCHAR(50)  NOT NULL, 
        `password` VARCHAR(60)  NOT NULL
    )