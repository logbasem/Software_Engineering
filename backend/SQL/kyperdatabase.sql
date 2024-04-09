-- Date: 4/2/2024
--
-- Database: `kyper`
--

-- ----------------

--
-- Table for userdata
-- Created by Kaitlyn Peters
-- MySQL version 8.0.36
-- Creates a table with rows: id, username, userpassword, email, first_name, last_name

CREATE TABLE `userdata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `userpassword` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- add test data to `userdata` table
INSERT INTO `kyper`.`userdata` (`id`, `username`, `userpassword`, `email`, `first_name`, `last_name`) VALUES 
('1', 'test', 'test', 'test@test.com', 'Dev', 'Account');

INSERT INTO `kyper`.`userdata` (`id`, `username`, `userpassword`, `email`, `first_name`, `last_name`) VALUES 
('2', 'test2', 'test2', 'test2@test.com', 'Test', 'Account');

ALTER TABLE userdata MODIFY userpassword varchar(255);
