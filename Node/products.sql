CREATE DATABASE IF NOT EXISTS Products;

USE Products;

CREATE TABLE IF NOT EXISTS Items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO Items (id, name, price) VALUES 
(1, 'Laptop', 1500.00),
(2, 'Smartphone', 800.00),
(3, 'Tablet', 500.00),
(4, 'Headphones', 100.00),
(5, 'Mouse', 30.00);