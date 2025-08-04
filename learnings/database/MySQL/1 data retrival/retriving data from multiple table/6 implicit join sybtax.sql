-- using and joining 2 columns  to identify when the column is has no unique record
-- use explicit syntax only
SELECT*
FROM orders o
JOIN customers c
   ON o.customer_id = c.customer_id
-- implicit join dont use can cause cross joint

-- 
