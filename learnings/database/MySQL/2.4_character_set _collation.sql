-- //Character Set & Collation
Character Set is a Dictionary- "book of symbols" the database is allowed to read
and write.
[Column].{ Character Set: 'A',
'B',
'a',
'b',
'Я',
'€',
'😊' }

-- {Character Set} - set of characters that system recognize - --utf8mb4 - utf8
-- {Collation} - rules followed by character in sorting and comparing collation has types ci,
-- cs

Collation is a Rulebook for Comparison Rulebook for the Dictionary
(_ci): [Column].{ Collation_Rule: ('a' == 'A')->true }
(_cs): [Column].{ Collation_Rule: ('a' == 'A')->false }

Hierarchical Inheritance
[Server{Rule_A}]->[Database{Rule_A}]->[Table{Rule_B}]->[Column{Rule_B}] (Rule B overrides A)


{ Character Set } settings.utf8mb4 is simply a bigger,
more complete dictionary than the older utf8.


utf8 (in MySQL) ➔ 📦 (Max 3 Bytes) → Fits 'A',
'Я',
'私'.❌ Fails on '👍' (Data is corrupted / lost).

utf8mb4 ➔ 🚚 (Max 4 Bytes) → Fits 'A',
'Я',
'私',
'👍'.✅ Succeeds always.


-- {Character Set} characters  <-inseparable-> {Collation} rules 

-- eventhough - characterset identical under {collation} can be different - doesnot affect insert 

-- these qualities can be assigned at different levels - server,database,tables,column

-- if not assigned takes the parent qualities

-- collation - impacts  when order comparison



--  A (The {Dictionary} ): A Character Set is a fundamental quality that defines a set of symbols and their corresponding binary encodings. It is the "dictionary" of characters the system recognizes.
--  B (The {Rules} ): A Collation is a set of rules for comparing and sorting the characters within a specific character set. It is the "grammar and alphabetization rulebook" for the dictionary.


--  C (Inseparable <->): Every character set must have at least one collation.
-- A character set (the dictionary) cannot exist without a collation (the rules), and vice versa. They are an inseparable pair.
--  D (Hierarchical Inheritance): 
--These qualities can be defined at four levels: Server, Database, Table, and Column.
-- A lower level (like a Column) inherits the setting from its parent (the Table) unless explicitly overridden. The most specific definition always wins.

--We can create tables with identical structure but different Collation qualities.

-- Claim C (Inseparable Samavāya): You cannot issue an SOP for sorting rosters (Collation) without first issuing the official dictionary the rosters are written in (Character Set).
--They are a single, combined directive.

--Claim D (Hierarchical Inheritance): 
--This is the "Chain of Command for Communication Protocols
--" Server Level: The protocol set by Allied Supreme Command for the entire theater of operations.
--Database Level: The protocol for a specific base,
-- e.g., "Bagram Airfield." It uses the theater - wide protocol by default.
--Table Level: A specific directive for a unit on that base,
-- e.g., the "INTEL_ANALYSIS_WING" table.
--Column Level: A special rule for a single field in that unit 's database, e.g., the codename column, which must be case-sensitive, even if the rest of the database is not. This specific order overrides the base' s general protocol.


USE fintech_db;

CREATE TABLE field_roster (
    agent_name VARCHAR(50) COLLATE utf8mb4_general_ci
);
CREATE TABLE intel_roster (
    agent_name VARCHAR(50) COLLATE utf8mb4_0900_as_cs
);

-- Two distinct tables   → [now exist with different comparison rules despite identical structure] ∵ [the (CREATE TABLE ) allowed  to explicitly assign a different {Collation}  to each one]

-- insert is not affected by {}
-- The tables can store the same raw data.
-- The  ({Collation}) does not affect the  (INSERT).

INSERT INTO field_roster
VALUES ('Viper'),
    ('viper'),
    ('Python');

INSERT INTO intel_roster
VALUES ('Viper'),
    ('viper'),
    ('Python');


-- Both tables -> now contain the exact same data substances
-- (insert)-identical row  in each,
-- irrespective of their different Collation 

--  E (Behavioral Impact): 
--The chosen collation directly impacts the result of sorting (ORDER BY) and comparison (WHERE clauses). 
--The most common distinctions are _ci (case-insensitive), _cs (case-sensitive), and _bin (binary).
-- The _ci collation treats uppercase and lowercase as equal.
SELECT agent_name
FROM field_roster
WHERE agent_name = 'viper';


-- The 'field_roster' table -> considers 'Viper'
-- and 'viper' to be equal
-- filtered by equality to 'viper' returned both records,
-- proving its case
--     - insensitive


-- The _cs collation treats uppercase
-- and lowercase as distinct.

SELECT agent_name
FROM intel_roster
WHERE agent_name = 'viper';

-- The 'intel_roster' table -> considers 'Viper'
-- and 'viper' to be distinct
-- filtered by equality to 'viper' returned only the exact match,
-- proving its case
--     - sensitive

-- The _cs collation uses case
--     as a factor in sorting.

SELECT agent_name
FROM intel_roster
ORDER BY agent_name;


-- The 'intel_roster' table
-- 'Viper' is sorted separately
-- from
--     and before 'viper',
--     which is a direct consequence of its case
--         - sensitive collation
-- sorts its data based on case

--  F (The Modern Standard): 
--The utf8mb4 character set is the universally recommended standard.
-- It is a superset of older utf8 and fully supports the entire Unicode standard, including multi-byte characters like emojis, ensuring no data is ever lost or misinterpreted.



