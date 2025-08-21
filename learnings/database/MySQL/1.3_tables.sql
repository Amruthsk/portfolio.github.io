-- My SQL [Tables]



-- Claim A (The Definition of table): 
--A [Table] is a named substance that exists within a database, composed of a fixed set of columns (attributes) and a variable number of rows (records).

-- Claim D (The Locus of Existence): 
--A Table cannot exist in a void; it must be created within a parent Database (SCHEMA), its designated container.

--C(REATE DATABASE)- creating container database IF NOT EXISTS [engineering_db]

CREATE DATABASE IF NOT EXISTS engineering_db;

-- Claim B (The Blueprint of table): 
--The structure of a Table—its columns—is defined at the moment of creation using the CREATE TABLE.

-- Claim C (The Inherent Qualities): 
--Each column in a Table's definition must have a {name and a data type} , which constrains the kind of data it can hold.
-- Claim F (The Default Essence): If a Storage Engine is not explicitly specified during creation, MySQL assigns a default engine (typically InnoDB).

--(USE) [engineering_db] - container; (CREATE) [TABLE] [pistons_innodb] {(piston_id INT PRIMARY KEY, material VARCHAR(255))};

USE engineering_db; CREATE TABLE pistons_innodb (piston_id INT PRIMARY KEY, material VARCHAR(255));


--[pistons_innodb] table
--|
--the CREATE TABLE Karma, defining its columns, succeeded within the context of its database 
--|
--blueprint is created, but no physical parts exist yet.

-- Claim E (The Hidden Essence - Storage Engine): 
--Every Table has an intrinsic, inseparable quality  called a Storage Engine (e.g., InnoDB, MyISAM), which dictates its underlying behavior, capabilities (like transactions), and how it is stored on disk.
-- The Storage Engine is an explicit, definable quality of the Table substance.

--(USE) [engineering_db] -container; (CREATE) [TABLE] [brackets_myisam] {(bracket_id INT PRIMARY KEY, finish VARCHAR(100)) ENGINE=MyISAM};

USE engineering_db; CREATE TABLE brackets_myisam (bracket_id INT PRIMARY KEY, finish VARCHAR(100)) ENGINE=MyISAM;

--brackets_myisam table
--|
--the CREATE TABLE Karma, defining its columns,engine explicitENGINE=MyISAM succeeded within the context of its database
--|
--possesses the specific essence we assigned to it

--We can directly perceive the "hidden essence" (Storage Engine) of each table, 
--proving one was assigned by default and the other explicitly.

--(SELECT) -see TABLE_NAME, ENGINE FROM [information_schema].TABLES WHERE [TABLE_SCHEMA] = '{engineering_db}';

SELECT TABLE_NAME, ENGINE FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'engineering_db';



--[Database] ⊃ [Table { ENGINE}] ⊃ [Column {name, DataType}]  ⊃ [Row]
--(USE) [engineering_db] -container;
--(CREATE) → [TableName] + Σ ({Column, DataType}, {ENGINE})
-- (CREATE) [TABLE] [brackets_myisam] {(bracket_id INT PRIMARY KEY, finish VARCHAR(100)) ENGINE=MyISAM};
--(SELECT) -see TABLE_NAME, ENGINE FROM [information_schema].TABLES WHERE [TABLE_SCHEMA] = '{engineering_db}';

-- 2 types of engine - MyISAM and InnoDB default - best-{All-or-Nothing Transaction- {(high security, reliable)}
-- which one to use - advantage
 
--

--Tables and storage engine

--  A (The {Inseparable}): 
--Every [Table] in MySQL possesses an essential and inseparable quality  known as a {Storage Engine}, 
--which dictates how its data is stored, accessed, and what features it supports.


--  B (The {Default} ): 
--In modern MySQL (8.0+), if no engine is specified during the (CREATE TABLE) , 
--the system automatically bestows the InnoDB quality upon the new table.

USE engineering_db; CREATE TABLE default_crankshaft (id INT PRIMARY KEY, material_grade VARCHAR(20));

SHOW TABLE STATUS LIKE 'default_crankshaft';

--[default_crankshaft]- {InnoDB}

--  C (The {InnoDB}  - The Fortress):
-- The InnoDB storage engine is defined by its support for 
--ACID-compliant Transactions, Row-Level Locking, and Foreign Key Constraints.
-- It prioritizes data reliability and concurrent performance.

--  D (The {MyISAM}  - The Workshop): 
--The MyISAM storage engine is defined by its lack of support for transactions and foreign keys, and its use of Table-Level Locking.
-- It prioritizes speed for read-heavy, simpler workloads.


--  E (The  (Specification)): T
--The architect can explicitly choose a {Storage Engine}  for a table during creation by adding the ENGINE = [engine_name] clause to the CREATE TABLE command.
USE engineering_db; 
CREATE TABLE titanium_piston (piston_id INT PRIMARY KEY) ENGINE=InnoDB; 
CREATE TABLE titanium_crankshaft (crank_id INT PRIMARY KEY, piston_id INT, FOREIGN KEY (piston_id) REFERENCES titanium_piston(piston_id)) ENGINE=InnoDB; -- supports foreign keys

--  F (The  (Perception)): 
--The specific {Storage Engine}  of an existing table is not hidden; 
--it can be directly see through commands like SHOW TABLE STATUS or by querying the master blueprint, the information_schema.
--information_schema provides a master view of all [] and their {}.


SELECT TABLE_NAME, ENGINE FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'engineering_db'
