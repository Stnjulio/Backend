-- Write your SQL query here

ALTER TABLE person
    ADD CONSTRAINT fk_person_user FOREIGN KEY (userId)
    REFERENCES user (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE;