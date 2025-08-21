-- Mysql database
-- [mech_workshop]- database
-- (SHOW DATABASES) - see {LIKE 'mech_workshop'}; see only

SHOW DATABASES LIKE 'mech_workshop';

-- The MySQL Server 
-- |
-- (of its list of databases reveals its name is absent)
-- |
-- currently lacks the ['mech_workshop' ]
--  A (Nature of the Substance): 
--  A DATABASE is a primary substance that serves as a logical container or namespace for related tables, views, and other database objects.


--  B (Synonymity):SCHEMA is a synonym for DATABASE.
-- In the context of MySQL, the terms DATABASE and SCHEMA are synonyms.
-- The command CREATE SCHEMA is an identical () to CREATE DATABASE.

--(CREATE SCHEMA) - bringing into being [mech_workshop];

CREATE SCHEMA mech_workshop;

--(SHOW DATABASES)- see {LIKE 'mech_workshop'};- see only

SHOW DATABASES LIKE 'mech_workshop';


-- The terms DATABASE and SCHEMA 
-- |
-- (CREATE SCHEMA )- creates ( SHOW DATABASES) - reveals
-- |
-- are functionally identical for creation

--  C (Physicality): A created database corresponds to a physical directory on the server's file system, located within the MySQL data directory.
-- This directory is where the files representing the tables within that database will be stored.


--  D (Contextual ): 
-- The (USE) command is a (critical)  that selects a database as the current default context.
-- All subsequent actions (like creating or querying tables) will apply to this selected database until a new USE command is issued.

--(USE)- context selection [mech_workshop];
USE mech_workshop;

-- SELECT DATABASE(); - re see
SELECT DATABASE();


-- The server's operational context
-- |
-- ((use) - selects the specified database, (select) database() - reveals the current database)
-- |
-- is a mutable state that can be set to a specific database

--  E ( Destruction): The (DROP DATABASE) command is the  that causes the permanent and irreversible absence  of the database and all substances contained within it.-- Mysql database
--DROP DATABASE causes permanent absence 

-- (DROP DATABASE) - destruction [mech_workshop]; - permanent absence

DROP DATABASE mech_workshop;


--(SHOW DATABASES) {LIKE '[mech_workshop]}';


SHOW DATABASES LIKE 'mech_workshop';


-- mech_workshop
-- |
-- (DROP - nolonger exist in the list of server database)
-- |
-- has entered a state of permanent absence



--[Client] 🗣️ ---> 🌐 ---> [Server listens to port] --(Checks {max connection})--> [🧠 Reads & Interprets 📚] --(Creates Reply)--> 🌐 ---> [Client 👁️] 

--[Database/Schema 🕋] ⊃ {Table-1, Table-2, View-1, ...}

-- [mech_workshop]- database
-- (SHOW DATABASES) - see {LIKE 'mech_workshop'}; see only filtering
--(CREATE SCHEMA) - bringing into being [mech_workshop];

-- server and database same physical location share 
--[Physical Machine 🏢] ⊃ { [The Chef 👨‍🍳 executor (Server Process)] ⇔ [The Pantry 🥫 (Database Files)] }

--(USE)- context selection [mech_workshop];
-- SELECT DATABASE(); - re see
-- ((use) - selects the specified database, (select) database() - reveals the current database
-- (DROP DATABASE) - destruction [mech_workshop]; - permanent absence
-- all thes are to create ,see,destroy database in mysql server