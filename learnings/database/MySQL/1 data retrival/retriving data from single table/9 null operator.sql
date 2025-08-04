-- how get records with missing value/ attribute
SELECT *
FROM customers

-- get missing phone number NO PHONE NO.
SELECT *
FROM customers
WHERE phone IS NULL

-- DO HAVE A PHONE NO.
SELECT *
FROM customers
WHERE phone IS NOT NULL

-- GET THE ORDERS THAT ARE  SHIPPED 
SELECT *
FROM orders
WHERE shipped_date IS Not NULL

SELECT *
FROM orders
WHERE shipper_id IS Not NULL

-- not shipped
SELECT *
FROM orders
WHERE shipper_id IS  NULL