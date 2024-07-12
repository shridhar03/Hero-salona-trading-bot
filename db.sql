CREATE DATABASE solana_bot;
USE solana_bot;

CREATE TABLE bot_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(255) NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bot_performance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    performance DECIMAL(5,2) NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO bot_status (status) VALUES ('Active and monitoring wallets');
INSERT INTO bot_performance (performance) VALUES (5.25);
