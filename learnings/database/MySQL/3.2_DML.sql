-- DML- 

-- INSERT
-- [Table] + (INSERT {new values}) → [Table + {New_Row}]
-- [Table] + (INSERT {Q₁}, {Q₂}, {Q₃}) → [Table + {Row₁}, {Row₂}, {Row₃}]
-- Explicit (Safe): (INSERT [col₂]:{val₂}, [col₁]:{val₁}) → SAFE MAPPING → [Table + {New_Row}
-- Insert -Population- creates new data within an existing structure.
-- [Table] ---- (INSERT [Row₅]) → [Table] ∪ {[Row₅]}
-- [Table] ---- (INSERT [Row6],[Row7],[Row8],[Row9]) → [Table] ∪ {[Row₅][Row6],[Row7],[Row8],[Row9]}
-- [Table] ---- (INSERT [Row₅]-duplicate primary key) clash - → rejected
-- [Table col with {notnull}] ---- (INSERT [Row₅]-missing value  null value) void - → rejected


USE fintech_db;
SELECT * FROM users;

-- users
-- |
-- currently 2 rows



--  A (The Core Purpose): The (INSERT) statement is the specific  used to add one or more new [rows]  to a [table].
--  B (The Fundamental Syntax): The basic structure of the  requires specifying the [target table] and providing the {values} for the new [row], using the (INSERT INTO) [table_name] VALUES (value1, value2, ...) format.
--  C (The Implicit Column Order Risk): When column names are not explicitly listed, the VALUES clause must provide a value for every column in the table, and these values must be in the exact same order as the columns were defined in the CREATE TABLE statement.
-- D (The Explicit Column Order Safety): A more robust method is to explicitly list the columns to be populated: INSERT INTO table_name (column1, column2) VALUES (value1, value2). 
--This allows providing values in any order and omitting columns that have default values or allow NULL.

-- (INSERT INTO) users (username, user_id)<-->{VALUES (3, 'alice', NOW())};

INSERT INTO users (user_id,username,email,last_login) VALUES (3, 'alice','kingpin@fintech.dev', NOW());

-- new row  -> created

--  E (The Multi-Row ): A single INSERT command can create multiple new row Dravyas by providing multiple comma-separated lists of values: ... VALUES (row1_val1, ...), (row2_val1, ...), ....
--  A single INSERT command can create multiple rows.
INSERT INTO users (user_id, username, email, last_login)
VALUES (4, 'alicek', 'kingoin@fintech.dev', NOW()),(5, 'alicej', 'kingjin@fintech.dev', NOW())
,(6, 'alicep', 'kingkin@fintech.dev', NOW()),(7, 'aliced', 'kinglin@fintech.dev', NOW()),(8, 'alicel', 'kingdin@fintech.dev', NOW())
;

-- new rows ->created

-- F (The Law of {}): The (INSERT)  is subject to the table's predefined {qualities} , such as constraints. Attempting to insert a row that violates a PRIMARY KEY (non-unique ID) or NOT NULL (absence of a required value) constraint will cause the {} to fail and be rejected by the database engine.

--The {PRIMARY KEY}  prevents the creation of a row with a duplicate ID.

INSERT INTO users (user_id, username, email, last_login)
VALUES (3, 'VK', 'vkpin@fintech.dev', NOW());

-- Insert
-- |
-- error message-which is the direct effect of the PRIMARY KEY constraint 's law (Duplicate entry '3' for key 'users.PRIMARY')
-- |
-- Rejected 


-- The {NOT NULL}  prevents the creation of a row where a required value is absent.

INSERT INTO users (user_id, email, last_login)
VALUES (9, 'vskpin@fintech.dev', NOW());


-- Insert
-- |
--(Field 'username' doesn 't have a default value)
-- |
-- Rejected



-- UPDATE

USE fintech_db

CREATE TABLE users2 (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    `rank` VARCHAR(20),
    status VARCHAR(20)
);

SELECT * FROM users2;

INSERT INTO users2 (user_id, username, `rank`, status)
VALUES (101, 'aknight', 'Sergeant', 'Active'),
    (102, 'bcharlie', 'Private', 'Active'),
    (103, 'davis', 'Private', 'On Duty');

--Before any (UPDATE) , the [] exist with their original {}

SELECT *
FROM users2;

--  'users' table   → [contains three distinct rows with their initial {values}
-- SELECT reveals their state before any (modification)


---[Row]|{original}
-- ∀[Row]|{original} + (Update {without where all rows}) → [Table + {updated all rows}]
-- [Row]|{original} + (Update ({SET q1}) ([WHERE]*true)) → [Table + {updated specific Row}]
-- [Row]|{original} + (Update ({SET q1,q2,q3}) ([WHERE]*true)) → [Table + {updated  Row, q1,q2,q3}]
--A precise (UPDATE) using ({SET}) and ([WHERE]) modifies a specific row's quality.
-- [Row]|{original} + (Update ({SET}) ([WHERE] multiple rows true) {limit - restrict the number of rows} ) → [Table + {updated limited Row}]




--  A (The Core ): The UPDATE statement is the specific action  that modifies the  (values in columns) of pre-existing  ([rows]) within a table.

--  B (The SET Clause - The Change): The SET clause is the heart of the (), specifying the assignment. It dictates which  ({column}) will receive a new {value}. Multiple {} can be modified in a single UPDATE command by separating assignments with commas.
--  C (The WHERE Clause - The Target): The WHERE clause is the critical logic component. It acts as a filter to identify the specific, individual  (rows) that are the intended subjects of the (UPDATE) .
--A precise (UPDATE) using ({SET}) and ([WHERE]) modifies a specific row's quality.



UPDATE users2 SET `rank` = 'Corporal' WHERE user_id = 102;
--The row for user 102  → [now has the  '{Corporal}' for its rank ] ∵ [the (UPDATE)  was precisely targeted by the WHERE clause,

--  D (The Global  Risk): If the WHERE clause is omitted, the (UPDATE)  is applied universally to all  (rows) in the table. This is an extremely powerful and potentially catastrophic action.
--Omitting the WHERE clause applies the () to all rows.

UPDATE users2
SET status = 'On Alert'

--  E (The LIMIT Clause - The Safeguard): The LIMIT clause acts as a crucial safety mechanism, restricting the number of [] the (UPDATE)  can affect, even if the WHERE clause matches a larger set.

-- The LIMIT clause restricts the scope of the (UPDATE)  even when where is present.
SELECT *
FROM users2;

UPDATE users2
SET status = 'Standby'
WHERE `rank` = 'Private'
LIMIT 1;


--  F (The Feedback - ): Upon execution, the MySQL server provides immediate, direct feedback  on the number of rows that were matched by the WHERE clause and how many were actually changed by the SET clause.