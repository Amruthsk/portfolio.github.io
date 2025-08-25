--what an Index is and how it functions
--  A (The Purpose):
-- An index is a special data structure that allows the database to find rows matching a query 's conditions much faster than scanning the entire table.
--Searching a large,un - indexed table is slow because it requires a "full table scan."
--Searching a large, indexed table is fast because it requires a "only selective  table scan."
--use - context setting
USE fintech_db;
--[Session] 🎯 → [fintech_db]
-- Drop old table and procedure
DROP TABLE IF EXISTS transactions;
-- [transactions Table] ? EXISTS → 💥 (Annihilation)
DROP PROCEDURE IF EXISTS load_data;
--[load_data Procedure] ? EXISTS → 💥 (Annihilation)
-- Create table again
--DDL - creation [Table] + [column]{name,datatype,}
CREATE TABLE transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2),
    category VARCHAR(50)
);
--; ----> '$$' instead."This allows us to write a multi-statement procedure as a single command.
-- Create procedure
DELIMITER $$ 

--DDL - [load_data] - begin --> end
-- callable action [load_data] will be in the database

CREATE PROCEDURE load_data()
 BEGIN


 --[i]-{1}
DECLARE i INT DEFAULT 1;
WHILE i <= 1000 DO --Conditional Repetition loop to create row values
INSERT INTO transactions (user_id, amount, category)
VALUES (
        FLOOR(1 + RAND() * 1000),
        -- random user_id
        RAND() * 500,
        -- random amount
        ELT(
            -- pick random category
            FLOOR(1 + RAND() * 5),
            'Groceries',
            'Utilities',
            'Transport',
            'Entertainment',
            'Salary'
        )
    );
SET i = i + 1;
END WHILE;
END $$


--[Client Parser]: '$$' ➡ ️ ';' 

 DELIMITER;
-- Run the procedure - invocation
CALL load_data();


--DQL
-- Verify inserted rows
SELECT COUNT(*) AS total_rows
FROM transactions;

SELECT *
FROM transactions
LIMIT 10;

-- transactions ' table
-- |
-- contains large volume of data

--  E (see): 
--The EXPLAIN command is the  (perception) that allows a user to see the execution plan chosen by the optimizer, revealing whether an index will be used for a query

EXPLAIN
SELECT *
FROM transactions
WHERE category = 'Entertainment';

--This SELECT query
--|
--(type is 'ALL' - full table scan,confirming it must inspect ~ 100,000 rows)
--|
--is inefficient

--  C (The  Creation): 
--The (CREATE INDEX )command is the specific action  that analyzes a table' s column(s)
-- and builds the index data structure,
--DDL
--The CREATE INDEX command applies the {performance}  to the specified colum


CREATE INDEX idx_category ON transactions(category);

SELECT *
FROM transactions
LIMIT 10;

-- The 'category' column
-- |
-- (the (CREATE INDEX)
-- the cause of this new quality,
-- completed successfully())
-- |
-- now possesses the quality of being indexed




--  B (The Trade-off): While indexes dramatically speed up data retrieval (SELECT queries), 
--they slow down data modification (INSERT, UPDATE, DELETE) because the index itself must also be updated. An index also consumes disk space.
-- bestowing the quality of " fast - retrieval " upon that table for those columns.
--  D (The Optimizer 's Choice): 
--The existence of an index does not guarantee its use. The MySQL query optimizer, an internal intelligence, decides whether using the index or scanning the whole table is the more efficient strategy for any given query.

--The index is now used to perform the search efficiently.

EXPLAIN
SELECT *
FROM transactions
WHERE category = 'Entertainment';

--This SELECT query
--|
--(strategy type is 'refusing the 'idx_category' key to inspect only a fraction of the total rows)
--|
--is efficient



-- table - large volume of data
--select - inefficient  - becoz full table scan , type all, all rows
--[SELECT on 'Category'] → [Row 1: Is it 'Entertainment'? No.] → [Row 2: Is it 'Entertainment'? No.] →...→ [Row 99,999: Is it 'Entertainment'? Yes!]


-- (CREATE INDEX)- index [[idx_category]]- hidden ds ON [transactions] table (category)-on column;

--[(CREATE INDEX) ] → Scans all [Rows in Table] → Builds a [New, Sorted, Separate Index Structure]

-- [Index: idx_category] <=> { 'Entertainment': → [Loc5, Loc22, Loc140...],
-- 'Groceries': → [Loc2, Loc15...],
-- ...}
-- ↕
-- [Table: transactions]...[Row at Loc5]...[Row at Loc15]...[Row at Loc22]...[Row at Loc140]...

--An index is NOT a new column within the table itself.It is a separate, hidden data structure that the database builds and maintains.
-- index - groups the common and makes search easy
-- with index --select - efficient  - becoz ref scan , type ref, some rows


