/* Migração 5 */
ALTER TABLE person
    ADD COLUMN userId INT DEFAULT NULL;
