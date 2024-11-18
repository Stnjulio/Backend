/* Migração 4 */
ALTER TABLE person
    ADD COLUMN userId INT DEFAULT NULL;
