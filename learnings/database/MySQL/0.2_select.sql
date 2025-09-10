[You] → (SELECT {Projection}) @ [Table] {Filter} → [Result Set]
DQL

(SELECT)@[Table]--->see [Table][rows]

(SELECT){WHERE}

Simple Perception: The fundamental act of looking at a tables data.
(SELECT) @ [Table] → [Result Set ⊂ Table]
Focused Perception (Filtering): Using a WHERE clause to perceive only specific rows.
(SELECT) @ [Table] {WHERE condition} → [Filtered Result Set]
Specific Perception (Projection): Asking to see only specific columns.
(SELECT {column_list}) @ [Table] → [Projected Result Set]

DML
[Input] ⇒ (DML) @ [Table] → [New Table State]

-- (INSERT [Values]) @ [Table] ⇒ [New Row ⊂ Table]
(INSERT) @ [Table] → [*New Row] ⊂ [Table]


-- (UPDATE [Values]) @ [Table]WHERE ⇒ [New value ⊂ Table]
{New} ⇒ (UPDATE) @ [*Target Row] {WHERE condition} → [*Target Row]{Modified}



-- (DELETE [Values]) @ [Table]WHERE ⇒ [Permanent absence of row ⊂ Table]
(DELETE) @ [*Target Row] {WHERE condition} ⇒ [?Row] @ [Table]



{Index}{Swift perception}
({Index})@[column]----->ordered data structure[indexed table]

[database]---(index)---->see (SELECT) avoid full scan

[indexed table]{diffcult to DML- Insert,update,delete }---------[index structure must also be updated]
[Index] ↔ [Column] { Ordered }
[Query on Table] → {Fast Perception} ∵ ((SELECT) @ [Column] ↔ [Index])
price of indexing
(DML) @ [Table] ⇒ (Update) @ [Index]




{Character Set} - set of valid characters for the table 
[Text Column] ⇔ { Allows only symbols ⊂ [[Character Set]]}

{Collation}- rules for comparing characters cs,ci- used in SELECT,
([Value A] ? = [Value B]) @ [Text Column] → { True / False } ∵ [Text Column] { Collation Rule }


{Null value}- absence of value

standard comparison not used - (=,<,>) {null}{not equal to any value |even to itself}

([Any Value] = [?]) → { False } ([?] = [?]) → { False }


WHERE
(ISNULL)
(ISNOTNULL)

(SELECT) @ [Table] {WHERE column IS NULL} → [Rows with Abhāva]



The Core Loop of Interaction (The General & The Map): This is the central truth. You change reality (DML), then you perceive that new reality (DQL).
[Table State 1] ← (DML) ← [You] → (DQL) → [Perception of State 1]

The Engine of Perception (SELECT): This model contains the entire logic of asking a precise question.
(SELECT {Projection}) @ [Table] {WHERE Filter} → [Result Set / ?]

The Price of Speed (Index): This model captures the fundamental trade-off of using an index.
(SELECT↑) ↔ [Index] ↔ (DML↓)

The Logic of Absence (NULL): This model defines the unique, non-comparative nature of NULL.
[?] ⇔ {IS NULL} and {IS NOT (=)}



CREATE DATABASE IF NOT EXISTS military_hq;

USE military_hq;


CREATE TABLE soldiers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    call_sign VARCHAR(50) NOT NULL,
    status VARCHAR(20),
    enlisted_date DATE
);

INSERT INTO soldiers (call_sign, status, enlisted_date)
VALUES ('Viper', 'Active', '2022-05-10'),
    ('Ghost', 'Active', '2021-11-20'),
    ('Spectre', 'MIA', NULL);

SELECT * FROM soldiers;



UPDATE soldiers SET status = 'On Leave' WHERE call_sign = 'Ghost';


SELECT * FROM soldiers WHERE call_sign = 'Ghost';


DELETE FROM soldiers WHERE call_sign = 'Viper';



SELECT call_sign, status FROM soldiers;


SELECT * FROM soldiers WHERE enlisted_date = NULL;


SELECT * FROM soldiers WHERE enlisted_date IS NULL;