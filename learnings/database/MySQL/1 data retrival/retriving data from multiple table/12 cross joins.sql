-- to join every record from 1st table to every record from 2nd table
-- therefore
-- no condition
use sql_store

SELECT
     c.first_name AS customer,
     p.name AS product
FROM customers c
CROSS JOIN products p
ORDER BY c.first_name

-- do cross joi between shippers and products 
-- using explicit syntax
SELECT
     sh.name AS shipper ,
     p.name AS product
FROM shippers sh
CROSS JOIN products p
ORDER BY sh.name

-- implicit
SELECT
     sh.name AS shipper ,
     p.name AS product
FROM shippers sh, products p
ORDER BY sh.name

