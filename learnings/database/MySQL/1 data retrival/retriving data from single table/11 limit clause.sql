-- limit no of records returned from query
SELECT *
FROM customers

-- to get only first 3 customer
SELECT *
FROM customers
LIMIT 3

-- 300 - all customer
SELECT *
FROM customers
LIMIT 300


-- for pagination 3 customers per page
-- page 1: 1-3
-- page 2: 4-6
-- page 3: 7-9
-- use offset 6=> skip 6 - get customer 789

SELECT *
FROM customers
LIMIT 6,3

-- GET the top three loyal customers
SELECT *
FROM customers
ORDER BY points DESC
LIMIT 3
