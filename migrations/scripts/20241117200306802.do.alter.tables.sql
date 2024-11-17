/* Adicionar relacionamento: person -> user */
ALTER TABLE person
    ADD COLUMN userId INT DEFAULT NULL;
