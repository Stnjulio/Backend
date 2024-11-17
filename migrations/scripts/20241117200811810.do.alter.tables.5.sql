/* Migração 10 */
CREATE TABLE IF NOT EXISTS PersonAddress (
    personId INT NOT NULL,
    addressId INT NOT NULL,
    PRIMARY KEY (personId, addressId),
    CONSTRAINT fk_person_address_person FOREIGN KEY (personId)
        REFERENCES person (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_person_address_address FOREIGN KEY (addressId)
        REFERENCES address (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
