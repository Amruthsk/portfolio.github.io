--Data Types function as the essential qualities of columns

--[columns]-{datatypes}

DROP DATABASE IF EXISTS workshop; CREATE DATABASE workshop; USE workshop;

--  A (The { }):
-- Every [[column]] in a [table] must be assigned a data type
--. This is not optional; it is the column's essential, inseparable quality  column <-> datatype.


--  B (The Rule of Kind):
-- A data type is a strict rule that constrains the kind of value a column can hold. 
--The primary kinds are numeric, string (text), and temporal (date/time).

--  C (The Rule of Form): 
-- Many data types can be further defined with parameters that constrain the value's form, such as its maximum length (VARCHAR(100)) or its precision (DECIMAL(10, 2)).

-- A table's columns must have {data types} that define their kind and form
--DDL for creation

-- (CREATE TABLE) [table] part_inventory+[column]-{name,datatype}- part_id whole number INT, part_name text max 20 VARCHAR(20), tolerance_mm number with 6 digits 4 after decimal DECIMAL(6, 4)
USE workshop; CREATE TABLE part_inventory (part_id INT, part_name VARCHAR(20), tolerance_mm DECIMAL(6, 4))

-- [part_inventory]
-- |
-- (DDL - Table + column{name,datatype})
-- |
-- ordered




--  D (The Rejection of (Invalid) ): 
--An attempt to INSERT or UPDATE a value that violates the column's {data type}  will be rejected by the database, resulting in an error. 
--The () fails.

--An action is rejected if the value's kind violates the column's kind datatype {}.

--(INSERT INTO) [part_inventory] (part_id, part_name) VALUES ('Piston Ring', 'Gasket');
-- () [table] + [row] + [value]

INSERT INTO part_inventory (part_id, part_name) VALUES ('Piston Ring', 'Gasket');
-- error: 'Piston Ring' is not a valid INT value, violating the column's data type rule.
-- datatype of column is different to kind of value inserted


-- INSERT
-- |
-- (error message showing int) - kind differ int vs string - error
-- |
-- rejected and failed

-- An action is rejected if the value's form (size) violates the column's {}.
INSERT INTO part_inventory (part_id, part_name) VALUES (101, 'High-Compression Piston Head Assembly');


-- INSERT
-- |
-- (error message showing Data too long for column 'part_name' at row 1) - form differ 20 vs x> 20 - error
-- |
-- rejected and failed

-- The system will automatically convert compatible values.


--  E (The  (Coercion)): 
-- In specific, predictable cases (like inserting the string '123' into an INT column),
-- MySQL will perform an automatic, implicit  of (type coercion), converting the value to fit the column's {datatype}. 
--This () is not always successful or desirable.




INSERT INTO part_inventory (part_id, part_name, tolerance_mm) VALUES ('102', 'Oil Seal', '0.0500');



-- The value '102' string
-- |
-- (insert completed)
-- |
-- [was successfully stored in an INT column]

--The coerced value is now a true number, not a string.

--DQL - see

SELECT * FROM  part_inventory;

--(SELECT)-see  part_id, part_id + 1 FROM [part_inventory] WHERE [part_name] = ['Oil Seal'*];

SELECT part_id, part_id + 1 FROM part_inventory WHERE part_name = 'Oil Seal';



--column <-----> {datatype}
-- {datatype-{kind(int,string,date),form(length,precision)}}- fundamental nature (kind) and its specific constraints (form)


--DDL-creation
--CREATE → [New Table: Table ( [Column] + {DataType} )]

--DmL-mover
--INSERT(Value) → {Column's datatype} ?? Value → [Mismatch]  →  Error
--INSERT(Value) → {Column's datatype} ?? Value → [Match]  → [New Dravya: Row]

--DQL - see
--SELECT → «Desired Columns» FROM [Target Table]

