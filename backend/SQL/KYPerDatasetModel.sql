-- MySQL Script generated by MySQL Workbench
-- Thu Apr 11 03:45:35 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

-- Author: Nick Thompson 


SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`UserData`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`UserData` (
  `userID` INT NOT NULL,
  `userName` LINESTRING NOT NULL,
  `password` LINESTRING NOT NULL,
  `profilePicturePath` LINESTRING NULL DEFAULT ./placeholderPic COMMENT 'Holds path to profile picture stored location\nDefault picture set as default',
  `lastLog` TIMESTAMP(1) NULL COMMENT 'create timestamp method to get timestamp at last log on by user',
  `userLATCoords` DECIMAL(8,6) NULL COMMENT 'Latitude to be used in Google Map API',
  `userLONGCoords` DECIMAL(9,6) NULL COMMENT 'Longitude to be used in Google Map API',
  PRIMARY KEY (`userID`),
  UNIQUE INDEX `idUserData_UNIQUE` (`userID` ASC) VISIBLE,
  UNIQUE INDEX `userName_UNIQUE` (`userName` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ProductLocal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ProductLocal` (
  `productID` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `barcode` INT NOT NULL,
  `company` LINESTRING NOT NULL,
  `megaCorp` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  `vegan` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  `ethicalSourced` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  `localSourced` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  PRIMARY KEY (`productID`, `company`),
  UNIQUE INDEX `productID_UNIQUE` (`productID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ProductSuperMarket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ProductSuperMarket` (
  `productID` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `barcode` INT NOT NULL,
  `company` LINESTRING NOT NULL,
  `megaCorp` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  `vegan` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  `ethicalSourced` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  `localSourced` TINYINT NULL DEFAULT NULL COMMENT 'NULL is unknown',
  PRIMARY KEY (`productID`, `company`),
  UNIQUE INDEX `productID_UNIQUE` (`productID` ASC) VISIBLE,
  INDEX `fk_ProductSuperMarket_ProductLocal1_idx` (`type` ASC) VISIBLE,
  CONSTRAINT `fk_ProductSuperMarket_ProductLocal1`
    FOREIGN KEY (`type`)
    REFERENCES `mydb`.`ProductLocal` (`type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`CompanyData`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`CompanyData` (
  `companyID` INT NOT NULL COMMENT 'company ID as shown for barcode',
  `companyName` LINESTRING NOT NULL COMMENT 'Associated to company or companyName',
  `logo` LINESTRING NULL DEFAULT ./placeholderPic COMMENT 'Holds path to picture stored location\nDefault picture set as default',
  `ownership` TINYINT NULL COMMENT '1 = Mega\n0 = Local',
  `LATCoords` DECIMAL(8,6) NULL COMMENT 'Latitude to be used in Google Map API',
  `LONGCoords` DECIMAL(9,6) NULL COMMENT 'Longitude to be used in Google Map API',
  PRIMARY KEY (`companyID`, `companyName`),
  UNIQUE INDEX `idUserData_UNIQUE` (`companyID` ASC) VISIBLE,
  UNIQUE INDEX `userName_UNIQUE` (`companyName` ASC) VISIBLE,
  CONSTRAINT `fk_CompanyData_ProductSuperMarket1`
    FOREIGN KEY (`companyName`)
    REFERENCES `mydb`.`ProductSuperMarket` (`company`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CompanyData_ProductLocal1`
    FOREIGN KEY (`companyName`)
    REFERENCES `mydb`.`ProductLocal` (`company`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `mydb` ;

-- -----------------------------------------------------
-- Placeholder table for view `mydb`.`view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`view1` (`id` INT);

-- -----------------------------------------------------
-- View `mydb`.`view1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`view1`;
USE `mydb`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
