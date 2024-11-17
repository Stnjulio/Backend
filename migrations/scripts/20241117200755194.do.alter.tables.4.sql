-- Write your SQL query here

/* Criar tabela de junção: person <-> activity */
CREATE TABLE IF NOT EXISTS PersonActivity (
    personId INT NOT NULL,
    activityId INT NOT NULL,
    PRIMARY KEY (personId, activityId),
    CONSTRAINT fk_person_activity_person FOREIGN KEY (personId)
        REFERENCES person (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_person_activity_activity FOREIGN KEY (activityId)
        REFERENCES activity (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
