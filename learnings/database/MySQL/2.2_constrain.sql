-- Core {Qualities} of Data Integrity:
-- NOT NULL,
-- UNIQUE,
-- PRIMARY KEY,
-- FOREIGN KEY


-- A (The  {Presence} - NOT NULL): 
--The NOT NULL constraint is a quality applied to a column that forbids the storage of NULL values.
--It mandates the {presence} of a value,
-- preventing its absence.

--The NOT NULL constraint forbids the absence of a value
USE fintech_db;
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL
);

-- use container [fintech]
-- DDL  - (create table) [departments] [{name,datatypes,constraints}]


INSERT INTO departments (dept_id, dept_name)
VALUES (1, NULL)

--DML - (INSERT INTO) [departments] ([dept_id, dept_name)] [VALUES] {(1, NULL)}

-- dept_name VARCHAR(100) NOT NULL
-- |
-- (tried to insert null value - error message - Column 'dept_name' cannot be null)
-- |
-- enforces the presence of a value

--  B ({Individuality} - UNIQUE):
--The UNIQUE constraint ensures that every value entered into that column (or group of columns) is distinct
-- from all other values in the same column.
---It allows for multiple NULL values, as NULL is the absence of a value,not a value itself.


--  C (The { Supreme Identity} - PRIMARY KEY): 
-- A PRIMARY KEY is a special - purpose constraint that is a synthesis of NOT NULL and UNIQUE.
--There can be only one PRIMARY KEY per table.
--Its divine purpose is to provide a permanent, unambiguous identifier for every single row making each row a (an ultimate particular).



--A PRIMARY KEY enforces both uniqueness and presence.

INSERT INTO departments (dept_id, dept_name)
VALUES (101, 'Treasury');


SELECT * FROM departments;

INSERT INTO departments (dept_id, dept_name)
VALUES (101,"Mint");


-- dept_id- primary key
-- |
-- (insert a duplicate value for creating second row, error - Duplicate entry '101' for key 'departments.PRIMARY')
-- |
-- enforces unique identity for each row



--  D (The Inseparable Relationship - FOREIGN KEY): 
--The {FOREIGN KEY} constraint is a quality that creates a referential link  between a column in one table (the child) <----> a PRIMARY KEY in another table (the parent).
--A FOREIGN KEY creates and enforces a link, preventing the creation of "orphan" records.

USE fintech_db;
--DDL - [Table] + [column] -{name,datatype,constraint}

CREATE TABLE officers (
    officer_id INT PRIMARY KEY,
    officer_name VARCHAR(100),
    officer_dept_id INT,
    FOREIGN KEY (officer_dept_id) REFERENCES departments(dept_id)
);

SELECT *
FROM departments;

INSERT INTO officers
VALUES (1, 'ASK', 999);

SELECT *
FROM officers;

-- [officers] - [{officer_dept_id} foreign key] <--> [departments]-{dept_id}The FOREIGN KEY constraint
-- |
-- (create a child row ('officer') pointing to a non - existent parent - was actively forbidden by the system)
-- |
-- enforces referential integrity - preventing the creation of "orphan" records.
-- cannot add or update  officer without updating the department 1st otherwise creates orphan records





-- The FOREIGN KEY prevents deletion of a parent row if children depend on it.

INSERT INTO officers
VALUES (2, 'Chancellor', 101);

SELECT *
FROM officers;

-- DML (DELETE FROM) [departments]
-- {WHERE [[dept_id]] = 101*;}

DELETE FROM departments
WHERE dept_id = 101;

-- The FOREIGN KEY relationship

-- Cannot delete or update a parent row: a foreign key constraint fails (`fintech_db`.`officers`, CONSTRAINT `officers_ibfk_1` FOREIGN KEY (`officer_dept_id`) REFERENCES `departments` (`dept_id`))

-- protects the parent entity
-- from being destroyed while dependents exist


--  E (The Law of Referential Integrity): The FOREIGN KEY actively enforces this link.
--It makes it impossible to insert a value into the child column that does not already exist in the parent 's primary key. Furthermore, it prevents the deletion of a parent row if child rows still refer to it.


-- -{not null - must have value presence} - {null - abscence} - [Table Cell] → MUST CONTAIN VALUE [*]

--[Column Values] → { v ₁,
-- v ₂,
-- v ₃...}
-- where vᵢ ≠ vⱼ
-- -{unique - distinct } - [Value in Row A] ≠ [Value in Row B] ≠ [Value in Row C]...


--[Row ID] → { VALUE } ∩ { UNIQUE }
-- -{primary - not null  & unique } 
-- [Row's ID] → [*] + [≠ Any Other Row's ID]



--[Child Table].[fk_col] <-> → [Parent Table].[pk_col]
--The Law for the Child (Governs Child INSERT /UPDATE):
--CHILD::
-- INSERT(fk = X) → REQUIRES ∃ PARENT(pk = X) (
--         To
--         insert a child with foreign key X,
--             there must exist a parent with primary key X.
--     )



--The Law for the Parent (Governs Parent DELETE /UPDATE ):
-- PARENT::DELETE(pk = X) → FORBIDDEN IF ∃ CHILD(fk = X) (
--     To delete a parent with primary key X is forbidden if there exists a child whose foreign key is X.
-- )

-- -{Foreign - [parent-{primary key}]<----->[child -{referred column}]} - No DML(insert,update,delete) is possible on [child] without changing the [parent] first
--[Child] <----> [Parent]
--The Law for the Child (Governs Child 's INSERT/UPDATE):-  only possible if parent exist already
-- can delte the child it wont affect the parent

--The Law for the Parent (Governs Parent 's DELETE/UPDATE): A parent with dependent children cannot be removed from existence.
-- cannot DELETE (
--     or change the ID of
-- ) the parent while a child is still referring to it. must re - assign
-- or delete the child first.

-- delete direction [parent] <-----  [child]
--[Child Row] MUST BE DELETED ✅ ➡ ️ THEN [Parent Row] can be deleted.
--cascade special
--DELETE [Parent Row] 💥 ➡ ️ AUTOMATICALLY DELETES [All Linked Child Rows]

-- insert direction [parent] ----> [child]
--[Parent Row] MUST EXIST ✅ ➡ ️ THEN [Child Row] can be created.
--[Orders_Table].[Row₁₂] { user_id: 5 } ← --→ [Users_Table].[Row₅] {id: 5}



