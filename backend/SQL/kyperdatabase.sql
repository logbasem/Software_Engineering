-- Date: 4/2/2024
--
-- Database: `kyper`
--

-- ----------------

--
-- Table for userdata
-- Created by Kaitlyn Peters
-- MySQL version 8.0.36

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

-- --------------
-- ProductLocal
-- --------------

CREATE TABLE IF NOT EXISTS `ProductLocal` (
  `productID` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `barcode` INT NOT NULL,
  `company` VARCHAR(45) NOT NULL,
  `megaCorp` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  `vegan` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  `ethicalSourced` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  `localSourced` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  PRIMARY KEY (`productID`),
  UNIQUE INDEX `productID_UNIQUE` (`productID` ASC) VISIBLE)
ENGINE = InnoDB AUTO_INCREMENT = 1;
-- wasn't working because linestring is a spatial data type therefore productID and company could NOT
-- be composite primary keys

-- insert test data
INSERT INTO `productlocal`(`productID`, `type`, `barcode`, `company`, `megaCorp`, `vegan`, `ethicalSourced`, `localSourced`) VALUES
('1', 'Dairy', '12432', 'Hilland', 0, 0, 0, 0);
INSERT INTO `productlocal`(`productID`, `type`, `barcode`, `company`, `megaCorp`, `vegan`, `ethicalSourced`, `localSourced`) VALUES
('2', 'Chocolate Milk', '232415', 'Dairy', 0, 0, 0, 0);