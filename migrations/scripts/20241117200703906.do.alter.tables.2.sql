/* Migração 6 */
ALTER TABLE user
    ADD COLUMN personId INT DEFAULT NULL;

