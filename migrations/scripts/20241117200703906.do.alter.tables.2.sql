-- Write your SQL query here

/* Adicionar relacionamento: user -> person */
ALTER TABLE user
    ADD COLUMN personId INT DEFAULT NULL;

