CREATE DATABASE knex_lab;
USE knex_lab;
CREATE TABLE soldiers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    `rank` VARCHAR(50),
    status VARCHAR(50)
);
INSERT INTO soldiers (name, `rank`, status)
VALUES ('John Doe', 'Sergeant', 'active'),
    ('Jane Smith', 'Captain', 'active'),
    ('Richard Roe', 'Private', 'inactive');

SELECT* FROM soldiers