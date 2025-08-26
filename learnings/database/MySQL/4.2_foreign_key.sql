-- -{Foreign - [parent-{primary key}]<----->[child -{referred column}]} - No DML(insert,update,delete) is possible on [child] without changing the [parent] first
--[Child] <----> [Parent]
--[Child_Table].{ foreign_key } 🔗 [Parent_Table].{ primary_key } - both dependent


--The Law for the Child (Governs Child 's INSERT/UPDATE):-  
--only possible if parent exist already if in parent absent - child insertion error
-- can delte the child it wont affect the parent
--success
--INSERT([Child].{ fk: 101 }) ? → [Parent].{ pk: 101 } ✅ ∴ (insert Allowed ✅)
--error
--INSERT([Child].{ fk: 999 }) ? → [Parent].{ pk: 999 } X ∴ (Insert Rejected X)


--The Law for the Parent (Governs Parent 's DELETE/UPDATE): A parent with dependent children cannot be removed from existence.
-- cannot DELETE (
--     or change the ID of
-- ) the parent while a child is still referring to it - orphan. must re - assign
-- or delete the child first.

--DELETE([Parent].{ pk: 101 })? → [Child].{ fk: 101 } ✅ ∴ (Delete Rejected 🚫)


-- delete direction [parent] <-----  [child]
--[Child Row] MUST BE DELETED ✅ ➡ ️ THEN [Parent Row] can be deleted.




-- insert direction [parent] ----> [child]
--[Parent Row] MUST EXIST ✅ ➡ ️ THEN [Child Row] can be created.
--[Orders_Table].[Row₁₂] { user_id: 5 } ← --→ [Users_Table].[Row₅] {id: 5}
--


--cascade special
--DELETE [Parent Row] 💥 ➡ ️ AUTOMATICALLY DELETES [All Linked Child Rows]
-- DELETE([Parent].{ pk: 101 }) 💥 → triggers → DELETE([Child].{ fk: 101 })


USE fintech_db;
CREATE TABLE commanders (
    commander_id INT PRIMARY KEY,
    callsign VARCHAR(50) NOT NULL
);
CREATE TABLE missions (
    mission_id INT PRIMARY KEY,
    mission_name VARCHAR(100) NOT NULL,
    assigned_commander_id INT,
    FOREIGN KEY (assigned_commander_id) REFERENCES commanders(commander_id)
);

-- The database schema  ] → [now contains an enforced referential link]

-- table contains - Pk and fk

 A (The Purpose of <--> ): A FOREIGN KEY constraint establishes a formal, inseparable relationship <--> between a column in a "child" table and a PRIMARY KEY in a "parent" table.
 B (The Law of Referential Integrity): This relationship enforces a strict rule: a value cannot be inserted or updated in the child's foreign key column unless that same value already exists in the parent's primary key column.
--  C (The () of Enforcement on the Child): MySQL actively rejects any (INSERT or UPDATE )action  on the child table if the specified foreign key value does not correspond to an existing parent row. This prevents the creation of "orphan" records.
-- ---The database will prevent the creation of an orphan record (a mission with a non - existent commander).

INSERT INTO commanders (commander_id, callsign)
VALUES (101, 'Viper');

INSERT INTO missions (mission_id, mission_name, assigned_commander_id)
VALUES (1, 'Operation Ghost', 999);
-- [This new mission row ] → [cannot be created]
-- foreign key constraint violation error, which is the undeniable proof 

-- Cannot add or update a child row: a foreign key constraint fails (`fintech_db`.`missions`, CONSTRAINT `missions_ibfk_1` FOREIGN KEY (`assigned_commander_id`) REFERENCES `commanders` (`commander_id`))

--  D (The Default () of Enforcement on the Parent): By default (ON DELETE RESTRICT), MySQL rejects any DELETE or UPDATE action on a parent row if at least one child row refers to it. This protects the parent from disappearing while it still has dependents.

--  The database, by default, will protect a parent row from deletion if a child depends on it.

INSERT INTO missions (mission_id, mission_name, assigned_commander_id)
VALUES (2, 'Serpent Strike', 101);

DELETE FROM commanders
WHERE commander_id = 101;


-- Commander 101 's record -> cannot be deleted

-- Cannot delete or update a parent row: a foreign key constraint fails (`fintech_db`.`missions`, CONSTRAINT `missions_ibfk_1` FOREIGN KEY (`assigned_commander_id`) REFERENCES `commanders` (`commander_id`))

-- E (The Cascading ): The ON DELETE CASCADE option alters the default behavior. It establishes a new rule: when a parent row is deleted, the database automatically performs a DELETE  on all child rows that refer to it, maintaining integrity through a chain reaction.

-- Using ON DELETE CASCADE, deleting the parent will automatically delete the dependent child.

DELETE FROM missions
WHERE assigned_commander_id = 101;

DROP TABLE missions;

CREATE TABLE missions (
    mission_id INT PRIMARY KEY,
    mission_name VARCHAR(100) NOT NULL,
    assigned_commander_id INT,
    FOREIGN KEY (assigned_commander_id) REFERENCES commanders(commander_id) ON DELETE CASCADE
);
INSERT INTO missions (mission_id, mission_name, assigned_commander_id)
VALUES (2, 'Serpent Strike', 101);

SELECT* FROM missions
SELECT *
FROM commanders

DELETE FROM commanders
WHERE commander_id = 101;


SELECT *
FROM missions
WHERE mission_id = 2;

[Deleting Commander 101] -> was a permitted action