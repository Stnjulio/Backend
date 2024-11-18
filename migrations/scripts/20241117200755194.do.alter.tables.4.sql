/* Migração 8 */
CREATE TABLE IF NOT EXISTS PersonActivity (
    id INT AUTO_INCREMENT PRIMARY KEY,
    personId INT NOT NULL,
    activityId INT NOT NULL,
    CONSTRAINT fk_person_activity_person FOREIGN KEY (personId)
        REFERENCES person (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_person_activity_activity FOREIGN KEY (activityId)
        REFERENCES activity (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
