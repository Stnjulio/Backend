-- Write your SQL query here
ALTER TABLE user
    ADD CONSTRAINT fk_user_person FOREIGN KEY (personId)
    REFERENCES person (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE;
