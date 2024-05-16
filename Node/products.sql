CREATE DATABASE IF NOT EXISTS Products;

USE Products;

CREATE TABLE IF NOT EXISTS Items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO Items (name, price) VALUES 
('Laptop', 1500.00),
('Smartphone', 800.00),
('Tablet', 500.00),
('Headphones', 100.00),
('Mouse', 30.00);