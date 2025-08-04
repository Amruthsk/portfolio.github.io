-- sort customer using first name ascending
SELECT*
FROM customers
ORDER BY first_name

-- sort customer using first name descending
SELECT*
FROM customers
ORDER BY first_name DESC

-- sort customer using multiple column 1st state 2nd by firstname
SELECT*
FROM customers
ORDER BY state,first_name

-- sort customer using multiple column 1st state 2nd by firstname desc
SELECT*
FROM customers
ORDER BY state,first_name DESC

-- sort customer using multiple column 1st state desc 2nd by firstname desc
SELECT*
FROM customers
ORDER BY state DESC ,first_name DESC

-- sort customer by birthdate
SELECT*
FROM customers
ORDER BY birth_date

SELECT first_name,last_name
FROM customers
ORDER BY birth_date

-- alias 
SELECT first_name,last_name,10 AS points
FROM customers
ORDER BY birth_date

-- order_items select all items for order id 2 sort them by total price in descending order
SELECT order_id,product_id,quantity,unit_price,quantity*unit_price AS total_price
FROM order_items
WHERE order_id = 2
ORDER BY total_price DESC