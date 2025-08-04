USE sql_store;

-- Retrieve data from single table
SELECT *
FROM customers
WHERE customer_id = 1
--ORDER BY first_name ;

SELECT *
FROM customers
WHERE customer_id = 1
ORDER BY first_name