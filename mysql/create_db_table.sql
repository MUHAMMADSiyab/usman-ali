-- Create database
CREATE DATABASE `testdb`

-- Create table
CREATE TABLE `testdb`.`users` 
	(
        `id` INT AUTO_INCREMENT PRIMARY KEY, 
        `username` VARCHAR(50), 
        `email` VARCHAR(50), 
        `password` VARCHAR(60)
    )