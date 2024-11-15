-- Write your SQL query here
CREATE TABLE IF NOT EXISTS activity (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    createdAt DATE 
);
