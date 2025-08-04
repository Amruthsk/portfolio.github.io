-- all column
SELECT *
FROM customers
-- only firstname & last name in the same order
SELECT first_name, last_name
FROM customers

-- order change
SELECT last_name, first_name
FROM customers

-- ++ point column 
SELECT last_name, first_name, points
FROM customers


-- arithmetic operation
-- ++ point column  + arithmetic operations
SELECT last_name, first_name, points, points +10
FROM customers

SELECT
 last_name, 
 first_name,
 points,
 points * 10 +100
FROM customers

-- BODMAS or use parenthese

SELECT
 last_name, 
 first_name,
 points,
 points + 10 * 100
FROM customers

-- alias
SELECT
  last_name, 
  first_name,
  points,
  (points + 10 )* 100  AS 'Discount factor'-- easily understand 
FROM customers


SELECT DISTINCT state
FROM customers

-- SOLUTION
-- return all the products
-- name
-- unit price
-- new price (unit price * 1.1)

SELECT 
  products.name, 
  unit_price,
  (unit_price * 1.1) AS new_price
  FROM products

