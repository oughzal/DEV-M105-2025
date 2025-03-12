-- Active: 1737679472715@@127.0.0.1@33066@parc_automobile
-- Création de la base de données
CREATE DATABASE IF NOT EXISTS Parc_Automobile;
USE Parc_Automobile;

-- Création de la table Employe
CREATE TABLE Employe (
    id_employe INT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    departement VARCHAR(50)
);

-- Création de la table Vehicule
CREATE TABLE Vehicule (
    id_vehicule INT PRIMARY KEY,
    marque VARCHAR(50),
    modele VARCHAR(50),
    annee_immatriculation INT
);

-- Création de la table Attribution (relation entre Employe et Vehicule)
CREATE TABLE Attribution (
    id_attribution INT PRIMARY KEY,
    id_employe INT,
    id_vehicule INT,
    date_debut DATE,
    date_fin DATE,
    FOREIGN KEY (id_employe) REFERENCES Employe(id_employe),
    FOREIGN KEY (id_vehicule) REFERENCES Vehicule(id_vehicule)
);
