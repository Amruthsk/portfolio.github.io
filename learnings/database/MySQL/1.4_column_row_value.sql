-- Internal of table

CREATE SCHEMA fintech_db;


USE fintech_db; DROP TABLE IF EXISTS users;

--  A ([Column] as Structural Universal):
-- A [[Column]] is a named, vertical attribute of a table with a defined data type. 
--This structure is a [[universal property]]  that applies consistently to every single row within that table.
--  B ([Row] as a Particular Instance): 
--A [Row] is a single, horizontal record within a table. 
---It is one complete instance of the entity the table describes and is composed of a collection of values, one for each column. 
--Each row is a unique particularity (*).
--  C (Value as Atomic Substance):
-- A Value (or Cell) is the most atomic unit of data. 
--It is the [specific]  that exists at the intersection of one particular row and one particular column.

USE fintech_db; CREATE TABLE users (user_id INT PRIMARY KEY, username VARCHAR(50) NOT NULL, email VARCHAR(100) UNIQUE, last_login TIMESTAMP NULL);

--DDL - for defining the structure of a [table]
--(USE) [fintech_db] - container; (CREATE TABLE) [users] {(user_id INT PRIMARY KEY, username VARCHAR(50) NOT NULL, email VARCHAR(100) UNIQUE, last_login TIMESTAMP NULL)};


--DML - for creating [row]

--(INSERT INTO) [users] {(user_id, username, email, last_login)} [VALUES] {(1, 'ASK', 'king@fintech.dev', NULL)};

INSERT INTO users (user_id, username, email, last_login) VALUES (1, 'ASK', 'king@fintech.dev', NULL);

-- 'users' table
-- |
-- (INSERT), the specific cause of a Row's existence, completed successfully
-- |
-- contains one Row substance 

-- A Row is a single, complete record 

--DQL for seeing

-- (SELECT)[[*]] FROM [users] WHERE [[user_id]] = 1*;

-- see row *  - horizontal
 SELECT * FROM users WHERE user_id = 1;

--data for user 1  in row is seen - horizontal slice

INSERT INTO users (user_id, username, email) VALUES (2, 'Senapati_G', 'general@fintech.dev');

--see [[column]] - vertical 
SELECT username FROM users

-- vertical slice 


--  D (Inherence of the Value): 
--A Value cannot exist independently. 
--Its existence is inseparably inherent  <-> to both a parent Row and a defining Column.

--  E (Enforcement by the [[Universal]]): 
--The  {quality/data type} of a Column universally dictates the type of Value that can exist within it for any row.
-- An attempt to insert a value of a non-conforming type will be rejected.

INSERT INTO users (user_id, username, email) VALUES ('three', 'Koshādhikārī_P', 'treasurer@fintech.dev');
-- error three instead of 3 INT datatype 
-- The 'user_id' column 
-- |
-- [the system produced a error, rejecting  (inserting) a string value ]
-- |
-- [strictly enforces its integer data type] 

--  F (Absence of a Value): 
--The special marker NULL does not represent a value, but rather the perceivable absence  of a [Value]  in a cell, 
--which is only permitted if the column's definition allows it.

-- NULL represents the perceivable absenc
 SELECT last_login FROM users WHERE user_id = 1;



    --[server] seperate [database] server uses database to find the answer for the query
    --[Database] ⊃ [Table { ENGINE}] ⊃ [[Column] {name, DataType}]  ⊃ [Row]* ⊃ [value]
    --CREATE SCHEMA fintech_db;
    --DDL - for defining the structure of a [table]
    --(USE) [fintech_db] - container; (CREATE TABLE) [users] {(user_id INT PRIMARY KEY, username VARCHAR(50) NOT NULL, email VARCHAR(100) UNIQUE, last_login TIMESTAMP NULL)};
    --DML - for creating [row]
    --(INSERT INTO) [users] {(user_id, username, email, last_login)} [VALUES] {(1, 'ASK', 'king@fintech.dev', NULL)};



-- [Server] ∋ {[Database] ∋ {[Table] ∋ {[Column]₁, [Column]₂, ...}}}
-- ..                     . ↳ [Row]₁ ⇔ {[Val]₁₁, [Val]₁₂, ...}
--                          ↳ [Row]₂ ⇔ {[Val]₂₁, [Val]₂₂, ...}

    --DDL- tables and columns - Data Definition Language  - architect
    -- The DDL  Model
    -- [Context: db] + (CREATE) + [table] + ({[cols]}) → [[table] | Data: absence] [state: ∀ Rows: absent]


    --DML - rows and values- modifies the data (the Row dravyas) within the defined structure. - scribe
    --(INSERT) + [table] + ([Row]) + ({Values}) → [table | Old Rows + {New Row}]

    Perception(Column_k) → {[Value]₁k, [Value]₂k, ..., [Value]nk} - [[]]

    Perception(Row_i) → {[Value]i₁, [Value]i₂, ..., [Value]ik} - *