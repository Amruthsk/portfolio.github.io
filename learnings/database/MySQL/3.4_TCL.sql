-- -- Transaction Control Language (TCL)

-- Default - any (DML) query in [table] - autocommit -[New Permanent State]


-- | > START_TRANSACTION() — — > (Temporary Workspace)
-- (START TRANSACTION); - begin safe zone - written in pencil

-- (DML) query in [table]


-- (
--     COMMIT -  permanent change (Temporary Workspace) == => [Final Permanent State]
--     or ROLLBACK - back to original value  (Temporary Workspace) ~~ > destroyed
-- )


--                   [Initial Permanent State]
--                          |
--                          |
--   (Path 1: Default Autocommit)
--   DML_() ——————————> [New Permanent State]
--                          |
--                          |
--   (Path 2: Transactional Control)
--   |> START_TRANSACTION()
--                          |
--                          v
--           ( Temporary Workspace | State' )
--           ( DML_1(), DML_2(), ... )
--                          |
--          /———————————————v———————————————\
--         /                                 \
-- |> COMMIT()                            |> ROLLBACK()
--         |                                 |
--         v                                 v
-- [Final Permanent State]                  🗑️ (Returns to [Initial Permanent State])
-- (State + State')





 A (The Default ): By default, MySQL operates in autocommit mode. In this mode, every single SQL statement that modifies data (DML) is treated as its own complete transaction and is made permanent immediately upon execution.
 By default, every DML action is immediately permanent.

USE fintech_db;
CREATE TABLE IF NOT EXISTS accounts (
    account_id INT PRIMARY KEY,
    balance DECIMAL(10, 2)
);

INSERT INTO accounts
VALUES (1, 1000.00),
    (2, 2500.00);

SELECT *
FROM accounts


UPDATE accounts
SET balance = balance - 100.00
WHERE account_id = 1;


-- --command was executed in the default autocommit mode,
-- which makes every DML

-- --The autocommit action
-- from the previous step is irreversible
--     and visible to all.


 B (The Transactional Boundary): The START TRANSACTION (or BEGIN) command is the () that temporarily suspends the autocommit behavior, creating a "transactional context" or a "safe zone" for performing a sequence of actions.
START TRANSACTION begins a safe zone
E (The () of Annulment): The ROLLBACK command is the meta - () that concludes a transaction by undoing all the changes made since START TRANSACTION,
restoring the data to the state it was in before the transaction began.

-- 

START TRANSACTION; -- safe zone begins
UPDATE accounts
SET balance = balance - 500.00
WHERE account_id = 2;

UPDATE accounts
SET balance = balance + 500.00
WHERE account_id = 1;

SELECT *
FROM accounts;

ROLLBACK; --restoring the data to the state it was in before the transaction began


-- The two
-- UPDATE Karmas  → will have no permanent effect(START TRANSACTION;
-- -- safe zone begins & rollback)

 C (The All-or-Nothing Principle): All (DML)  executed after START TRANSACTION are treated as a single, atomic (indivisible) unit of work. They will either all succeed or all fail together.
 D (The () of Permanence): The COMMIT command is the meta-() that concludes a transaction and makes all the changes within it permanent and visible to all other database sessions.


START TRANSACTION;
-- safe zone begins
UPDATE accounts
SET balance = balance - 500.00
WHERE account_id = 2;
UPDATE accounts
SET balance = balance + 500.00
WHERE account_id = 1;
SELECT *
FROM accounts;


COMMIT;


-- The two
-- UPDATE Karmas  → will have  permanent effect(START TRANSACTION;
-- -- safe zone begins & commit)