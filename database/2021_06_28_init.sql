CREATE DATABASE fiverr;

USE fiverr;

CREATE TABLE `user` (
   `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `email` varchar (255) NOT NULL,
    `username` varchar (255) NOT NULL,
    `password` varchar (255) NOT NULL,
    `lastname` varchar (255),
    `firstname` varchar (255),
    `description` text,
    `ranking` int, 
    `id_main_category` int NOT NULL,
    `id_sub_category` int NOT NULL
);

CREATE TABLE main_category (
    `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` varchar (255) NOT NULL
);

CREATE TABLE sub_category (
    `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` varchar (255) NOT NULL
);

ALTER TABLE `user` ADD FOREIGN KEY (`id_main_category`) REFERENCES `main_category` (`id`);

ALTER TABLE `user` ADD FOREIGN KEY (`id_sub_category`) REFERENCES `sub_category` (`id`);