-- Null - explicit abscence of data - intentional abscence
-- ? - unknow  

--A Cell 's Value: [ 0 ] known vs [ "" ] known vs [ ? ] unknown

-- WHERE asset_count = NULL; - no data
--unknown cannot be equal to anything, not even another unknown.
-- [ WHERE 20 = ? ] → ? (treated as FALSE)
-- [ WHERE 20 = ? ] → ? (treated as FALSE)
--WHERE asset_count IS NULL; -> shows the row with null value
-- [ WHERE Cell_State IS [?] ] → ✔ ️ (TRUE)

--AVG() ignores NULLs, 
-- AVG([ 20, 15, ?, 0 ]) → sum(20, 15, 0) / count(3) (It filters out the ? before acting).
--while COUNT(*) includes them.
--COUNT(*)([Row₁], [Row₂], [Row₃ with ?], [Row₄]) → count(4)

--

--  A (The Nature of Absence): The NULL value represents a missing, unknown, or non-existent value. It is fundamentally different from a value of 0 or an empty string ''.
--  We can create a row where a value is explicitly absent (NULL).
 
 USE fintech_db;
CREATE TABLE intel_reports (
    report_id INT PRIMARY KEY,
    location VARCHAR(100),
    asset_count INT NULL
);
INSERT INTO intel_reports
VALUES (101, 'Sector Alpha', 20),
    (102, 'Sector Bravo', 15),
    (103, 'Sector Charlie', NULL),
    (104, 'Sector Delta', 0);

SELECT * FROM intel_reports

The 'intel_reports' table -> now contains a row with an explicit absence of data



--  B (The Fallacy of Standard Comparison): NULL cannot be compared using standard arithmetic comparison operators like =, <, or !=. Any comparison to NULL (even NULL = NULL) results in NULL, which is treated as false in a WHERE clause.

-- Using = to find NULL will fail.


SELECT *
FROM intel_reports
WHERE asset_count = NULL;



-- The standard comparison 'asset_count = NULL' -> [is an invalid method for seeing
-- No data



--  C (The Correct Perception ): 
--To specifically test for the state of absence (NULL), one must use the IS NULL or IS NOT NULL operators.
-- IS NULL is the correct operator to find rows with absent values.


SELECT *
FROM intel_reports
WHERE asset_count IS NULL;

--The 'IS NULL' operator -> is the correct for seeing rows with absent data



--  D (Ignoring Absence in Aggregates): Most aggregate functions, such as COUNT(), SUM(), and AVG(), completely ignore rows where the relevant value is NULL during their calculations.
--  E (The Exception of COUNT(*)): The specific aggregate  COUNT(*) is an exception; it counts all rows regardless of NULL values because it is counting the existence of the row Dravya itself, not the  (quality) of a specific column.
-- --AVG() ignores NULLs, while COUNT(*) includes them.

SELECT AVG(asset_count),
    COUNT(asset_count),
    COUNT(*)
FROM intel_reports;


-- Aggregate functions -> treat NULL as a state of absence, not a value

-- AVG and COUNT(asset_count) only considered 3 rows, while COUNT(*) perceived all 4 existing rows