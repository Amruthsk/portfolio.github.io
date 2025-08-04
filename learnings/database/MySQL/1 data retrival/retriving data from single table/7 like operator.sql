-- retrieve rows that match spefic string pattern
-- customers with b in the last name 
SELECT *
FROM customers
WHERE last_name LIKE 'b%' -- any number of character after b/B
 
-- any number of charcter before and after b
SELECT *
FROM customers
WHERE last_name LIKE '%b%'

-- % to represent any number of character

-- any number of charcter before  y
SELECT *
FROM customers
WHERE last_name LIKE '%y'


-- _ to represent single character/match single character
-- _single character _y exactly 2 character
SELECT *
FROM customers
WHERE last_name LIKE '_y'

-- __two character __y
SELECT *
FROM customers
WHERE last_name LIKE '__y'

-- ___three character ___y
SELECT *
FROM customers
WHERE last_name LIKE '___y'

-- ____Four character ___y
SELECT *
FROM customers
WHERE last_name LIKE '____y'

-- _____five character ___y exactly 5 character ending withy
SELECT *
FROM customers
WHERE last_name LIKE '_____y'

-- starting with b and end with y

SELECT *
FROM customers
WHERE last_name LIKE 'b____y'

-- Get the customers whose
-- addresses contain TRAIL or AVENUE
-- phone numbers end with 9
SELECT *
FROM customers
WHERE address LIKE '%TRAIL%' OR
      address LIKE '%avenue%'

SELECT *
FROM customers
WHERE phone LIKE '%9'

SELECT *
FROM customers
WHERE phone NOT LIKE '%9'

