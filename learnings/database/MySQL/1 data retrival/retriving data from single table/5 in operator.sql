-- or  customers located in va,ga,fl
SELECT *
FROM customers
WHERE state = 'VA' OR state = 'GA' OR state = 'FL'

-- in compare attribute with list of values
SELECT *
FROM customers
WHERE state IN ('VA','GA','FL')

-- not in outside the state
SELECT *
FROM customers
WHERE state NOT IN ('VA','GA','FL')


-- RETURN products with
-- quantity in stock equal to 49, 38, 72
use sql_store
SELECT *
FROM produts
WHERE quantity_in_stock IN (49,38,72)
products