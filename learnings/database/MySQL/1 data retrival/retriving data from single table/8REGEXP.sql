-- customer containing field in lastname 
SELECT *
FROM customers
WHERE last_name LIKE '%field'

-- identical to above but use regexp
SELECT *
FROM customers
WHERE last_name REGEXP 'field'

-- SPECIAL CHARACTER ^ , $
SELECT *
FROM customers
WHERE last_name REGEXP '^field'

SELECT *
FROM customers
WHERE last_name REGEXP 'field$'

-- search for multiple words using| pipe
SELECT *
FROM customers
WHERE last_name REGEXP 'field|mac'

SELECT *
FROM customers
WHERE last_name REGEXP 'field|mac|rose'

-- lastname should either start with field,mac,rose
SELECT *
FROM customers
WHERE last_name REGEXP '^field|mac|rose'

SELECT *
FROM customers
WHERE last_name REGEXP 'field$|mac|rose'

-- customer who has e in the lastname ge,ie,me-explicit
SELECT *
FROM customers
WHERE last_name REGEXP '[gim]e'

-- customer who has e in the lastname el,ey,et - explicit
SELECT *
FROM customers
WHERE last_name REGEXP 'e[lyt]'

-- customer who has e in the lastname [a-h]e - implicit
SELECT *
FROM customers
WHERE last_name REGEXP '[a-h]e'

-- customer who has e in the lastname [i-z]e - implicit
SELECT *
FROM customers
WHERE last_name REGEXP '[i-z]e'

-- ^ beginning
-- $ end
-- | logical or multiple search
-- [abcd] - any character listed in the bracket
-- [a-h] - range



-- get the customer whose
--  1) first names are elka or ambur
--  2) last names end with ey or on
--  3) last names start with my or contains se
--  4) last names contain b followed by r or u

-- 1) first names are elka or ambur
SELECT *
FROM customers
WHERE first_name REGEXP 'elka|ambur'

--  2) last names end with ey or on
SELECT *
FROM customers
WHERE last_name REGEXP 'ey$|on$'

--  3) last names start with my or contains se
SELECT *
FROM customers
WHERE last_name REGEXP '^my|se'


--  4) last names contain b followed by r or u
SELECT *
FROM customers
WHERE last_name REGEXP 'b[ru]'