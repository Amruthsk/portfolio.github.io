-- get order in year 2019
SELECT
    order_id,
    order_date,
    'ACTIVE' AS status
FROM orders
WHERE   order_date >= '2019-01-01'

-- group all other records
SELECT
    order_id,
    order_date,
    'Archived' AS status
FROM orders
WHERE   order_date < '2019-01-01'

-- union and combine the records
SELECT
    order_id,
    order_date,
    'ACTIVE' AS status
FROM orders
WHERE   order_date >= '2019-01-01'
UNION
SELECT
    order_id,
    order_date,
    'Archived' AS status
FROM orders
WHERE   order_date < '2019-01-01'

-- first query determines the name of the column
-- combine result form same table or differnent table using query

-- less than 2000 bronze
-- btw than 2000 - 3000 silver
-- more than  3000 - gold 

-- union and combine the records
SELECT
    c.customer_id,
    c.first_name,
    c.points,
    'Bronze' AS type
FROM customers c
WHERE   points <= 2000
UNION
SELECT
    c.customer_id,
    c.first_name,
    c.points,
    'Silver' AS type
FROM customers c
WHERE   points BETWEEN 2000 AND 3000
UNION
SELECT
    c.customer_id,
    c.first_name,
    c.points,
    'Gold' AS type
FROM customers c
WHERE   points > 3000
ORDER BY customer_id


