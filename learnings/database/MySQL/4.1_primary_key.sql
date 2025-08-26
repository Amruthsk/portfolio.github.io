 
 USE fintech_db;
CREATE TABLE transactions3 (
    transaction_id INT PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255)
);
 
 
-- transaction_id <----->  PRIMARY KEY
-- values should be unique - [Row_A].PK ≠ [Row_B].PK
-- no duplicate 
-- value must exist [Row].PK ≠ ∅
-- 1 table < ----->  1 PRIMARY KEY [Table] ← -1 - → { PRIMARY KEY }
-- filter (hetu)-where applied on primary key column value

-- SELECT(?) WHERE PK = value → [The One True Row]
 
--  [Table] ←-1-→ {PK} :: { [Row_A(PK:val_A ≠ ∅)], [Row_B(PK:val_B ≠ ∅)] } WHERE val_A ≠ val_B
 
 
--  A (The Law of Uniqueness): A primary key constraint mandates that all values in the specified column (or columns) must be unique. No two rows in the table can share the same primary key value.
--The Primary Key ensures every row is a *
INSERT INTO transactions3 (transaction_id, amount, description)
VALUES (101, 250.75, 'Equipment Purchase');

-- duplicate value
INSERT INTO transactions3 (transaction_id, amount, description)
VALUES (101, 50.00, 'Office Supplies');
-- transaction_id < ----->  PRIMARY KEY
--transaction_id unique and has values
--(Duplicate entry '101' for key 'transactions3.PRIMARY')

--  B (The Law of Non-Nullability): A primary key column cannot contain NULL values. This is an implicit and absolute rule. The identity of a row cannot be "nothing."
 INSERT INTO transactions3 (transaction_id, amount, description)
VALUES (NULL, 100.00, 'Test Deposit');
 -- transaction_id < ----->  PRIMARY KEY
 --transaction_id unique and has values
-- The 'transaction_id' PRIMARY KEY  ] → [enforces non-nullability ] ∵ [my attempt to INSERT a NULL value was actively rejected by the server with a specific error]



 --C (The Law of Singularity): A table can have one, and only one, PRIMARY KEY.
ALTER TABLE transactions
ADD PRIMARY KEY (description);

-- [A table - > can only possess a single primary key
-- --(Multiple primary key defined)

--  D (The Law of Identification): The core purpose of the primary key is to provide a reliable, unambiguous mechanism to identify and locate a specific, individual row within the table.
--he Primary Key is the definitive mechanism for perceiving a single,
-- specific row.

-- add more rows
INSERT INTO transactions3
VALUES (102, 1200.00, 'Server Rental'),
    (103, 45.50, 'Domain Name');

SELECT *
FROM transactions3
WHERE transaction_id = 101;



-- The PRIMARY KEY  ] → [serves as the perfect identifier for a specific row]
-- using it in a WHERE clause allowed me to perceive one and only one row



--  E (The Law of Physical Order - InnoDB): In the InnoDB storage engine, the PRIMARY KEY has a special power: it dictates the physical storage order of the data on the disk. The table is a "clustered index," organized like a dictionary, sorted by its primary key. This makes lookups by the primary key exceptionally fast.
