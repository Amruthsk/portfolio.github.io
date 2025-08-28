


-- DDL -Data Definition Language (DDL) - structure

-- (CREATE) → ∅ → [Table] {Column₁, Column₂...}

-- ∅ → (CREATE DATABASE) ->   Database

-- Database → (CREATE TABLE)->[Table]<--> { Column ₁, Column ₂...}{name,data type,constraints}


-- DQL - see
-- SHOW DATABASES LIKE 'art_portfolio'
-- [Server] ~ see ️ ~ > {list of database Database ₁,
-- Database ₂,
-- ...}

-- DESCRIBE portraits;

-- [Table] ~ see ️ ~ > { { DT },
-- { constraints },
-- ...}

-- [Table]{Col_A} + (ALTER ADD Col_B) → [Table]{Col_A, Col_B}
-- [Table]{Col_B < Type1 >} + (ALTER Modify Col_B) → [Table]{Col_A, Col_B < Type2 >}
-- [Table]{Col_A,Col_B} + (ALTER Drop Col_B) → [Table]{Col_A}
-- [Table]{Col_B} + (ALTER remane Col_B->Col_C) → [Table]{Col_C}




-- [Existing_Table] ---(DROP) → ∅
-- [non existing Table] ---- (DROP TABLE) → ERROR (Execution Halted)
-- [non existing Table] ---- (DROP TABLE {IF EXISTS}) → ✅ OK (Warning)
-- [deleted Table] --(describe) → "ERROR: Table doesn't exist"
-- [database] + (DROP) → ∅




--  A (The [Container] ): The DATABASE (also referred to as a SCHEMA) is the primary substance that serves as a logical container for related tables
-- and other database objects.

--  B (The (Creation)  for Containers): The CREATE DATABASE statement is the specific (action) that brings a new,
-- empty database substance into existence on the server.

--The CREATE DATABASE command brings the container  into existence.

CREATE DATABASE art_portfolio;

-- The 'art_portfolio' database
-- |
-- CREATE DATABASE,
-- the cause of its existence,()
-- |
-- now exists

SHOW DATABASES LIKE 'art_portfolio'

--see art_portfolio

--∅ → (CREATE DATABASE) ->   Database

--  C (The [Structured] ): The TABLE is the fundamental substance designed for storing structured data.Its structure is rigidly defined by a collection of named columns.
--  D (The (Creation) for Structures): The CREATE TABLE statement is the action  that brings a new table substance into existence within a specific database.The statement must define the table 's name and the complete specification of its columns.

CREATE TABLE forges a new structured  (TABLE) with specific qualities (COLUMNS, Data Types, PRIMARY KEY).

--∅ → (CREATE TABLE)->[Table]<----> { Column ₁, Column ₂...}{name,data type,constraints}

-- E (The Essential Quality - {Data Type}): Every column defined in a CREATE TABLE statement must be assigned a {Data Type} (e.g., INT, VARCHAR, DATE). This is an inseparable quality  that enforces the kind of data that can be stored in that column.

--  F (The Uniqueness Quality - Primary Key): A PRIMARY KEY is a {special constraint}  applied to a column (or columns) to guarantee that every value in that column is unique across all rows. This establishes a unique identity for each row.
USE art_portfolio;
CREATE TABLE portraits (
    portrait_id INT PRIMARY KEY,
    subject_name VARCHAR(100) NOT NULL,
    sitting_date DATE
);

--The created table 's structure perfectly matches the blueprint defined by the CREATE TABLE command.

DESCRIBE portraits;

--DESCRIBE- structural inspection







-- [Table]{Col_A} + (ALTER ADD Col_B) → [Table]{Col_A, Col_B}
-- [Table]{Col_B < Type1 >} + (ALTER Modify Col_B) → [Table]{Col_A, Col_B < Type2 >}
-- [Table]{Col_A,Col_B} + (ALTER Drop Col_B) → [Table]{Col_A}
-- [Table]{Col_B} + (ALTER remane Col_B->Col_C) → [Table]{Col_C}


-- -
--  A (The Core Purpose): 
--  The ALTER TABLE command is the (specific)  used to change the structure, properties, or qualities  of a pre-existing table .

DESCRIBE fintech_db.users;

--  B (Adding a Quality): The ADD COLUMN clause is a sub- of ALTER TABLE that introduces a new column (a new Guṇa) to the table's structure.
-- --The ADD COLUMN clause introduces a new quality (column) to the table.

ALTER TABLE fintech_db.users ADD COLUMN status VARCHAR(20) DEFAULT 'active';


-- The 'users' table
-- |
-- (DESCRIBE fintech_db.users;)
-- |
-- now possesses a 'status' column

--  C (Changing a Quality): The MODIFY COLUMN clause is a sub that changes the definition of an existing column, such as its data type or default value (altering its existing column).


ALTER TABLE fintech_db.users MODIFY COLUMN username VARCHAR(100) NOT NULL;


DESCRIBE fintech_db.users;

--The 'username' column 's Type
-- |
-- (DESCRIBE fintech_db.users;)
-- |
-- fundamentally transformed old column to new column


--  D (Removing a Quality): The DROP COLUMN clause is a sub- that causes the permanent absence (Dhvaṃsa-abhāva) of a column, removing that quality from the table entirely.
--The DROP COLUMN clause causes the permanent absence of a quality


ALTER TABLE fintech_db.users DROP COLUMN status;

DESCRIBE fintech_db.users;

--The 'status' column 's Type
-- |
-- (DESCRIBE fintech_db.users;)
-- |
-- permanent absence


--  E (Renaming a Quality): The RENAME COLUMN clause is a sub- that changes the name of an existing column, modifying its {identifying}  without changing its data type.










-- [Existing_Table] ---(DROP) → ∅
-- [non existing Table] ---- (DROP TABLE) → ERROR (Execution Halted)
-- [non existing Table] ---- (DROP TABLE {IF EXISTS}) → ✅ OK (Warning)
-- [deleted Table] --(describe) → "ERROR: Table doesn't exist"
-- [database] + (DROP) → ∅

USE fintech_db;
CREATE TABLE demolition_target (id INT);




--  A (The Act of Annihilation): 
--The (DROP TABLE) command is the specific  that permanently removes one or more table substances from a database.

--DROP TABLE permanently removes the specified table substance.

USE fintech_db;
DROP TABLE demolition_target;


-- demolition_target ' table
-- |
-- DROP TABLE()
-- |
-- successfully removes table

--  B (Irreversibility): This () is irreversible.
-- Once a table is dropped, all its structural definitions and the data (all the rows it contained) are permanently lost.

USE fintech_db;
DESCRIBE demolition_target;

--Table 'fintech_db.demolition_target' doesn 't exist

--  C (The Consequence of Error): Attempting to DROP a table that does not exist will result in an error, halting the execution of a script unless specifically handled.
--  D (The Safeguard Clause): Using the optional IF EXISTS clause with DROP TABLE modifies (). If the table does not exist, it will not cause an error; instead, it will issue a warning and allow execution to continue. This is a critical tool for writing robust scripts.
USE fintech_db;
DROP TABLE IF EXISTS non_existent_target;

-- The MySQL system
-- |
--(gracefully handle the absence of its target substance)
--|
-- remains in a stable,
-- non - error state




--  E (Loss of Privileges): When a table is dropped, any specific user privileges associated with that table are also permanently removed.