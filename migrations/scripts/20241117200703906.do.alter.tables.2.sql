/* Migração 7 */
ALTER TABLE user
    ADD COLUMN personId INT DEFAULT NULL;

