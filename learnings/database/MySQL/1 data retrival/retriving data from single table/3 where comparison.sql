USE sql_store

SELECT *
FROM customers
WHERE points > 3000

-- comparison operator
-- >,>=,<,<=,=,!= or <>

-- customers from va
SELECT *
FROM customers
WHERE state = 'va'

-- customers outside of  va
SELECT *
FROM customers
WHERE state != 'va'

-- date values

SELECT *
FROM customers
WHERE birth_date > '1990-01-01'

-- GET the orders placed this year
SELECT *
FROM orders
WHERE order_date  >= '2019-01-01'