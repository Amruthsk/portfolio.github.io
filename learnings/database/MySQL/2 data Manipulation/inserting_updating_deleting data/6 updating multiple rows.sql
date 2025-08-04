-- more specific
UPDATE invoices
SET 
   payment_total = invoice_total * 0.1,
   payment_date = due_date 
WHERE client_id = 3;


UPDATE invoices
SET 
   payment_total = invoice_total * 0.1,
   payment_date = due_date 
WHERE client_id IN (1,5);


-- write a sql statement to 
-- give any customer born befor 1990
-- 50 extra points

USE sql_store;

SELECT *
FROM customers
WHERE birth_date < '1990-01-01'; 

UPDATE customers
SET points = points + 50
WHERE birth_date < '1990-01-01';

-- subqueries  in update
--  we know the name not the id

-- more specific

USE sql_invoicing 

UPDATE invoices
SET 
   payment_total = invoice_total * 0.1,
   payment_date = due_date 
WHERE client_id = 3;

--  we know the name not the id -- instead of 3
UPDATE invoices 
SET
   payment_total = invoice_total*0.3,
    payment_date = due_date
WHERE client_id =  -- = single record
                 (SELECT client_id -- first executes
                 FROM clients
                 WHERE name = 'Myworks')
                 
SELECT client_id
FROM clients
WHERE name = 'Myworks';


UPDATE invoices 
SET
   payment_total = invoice_total*0.3,
    payment_date = due_date
WHERE client_id IN -- multiple records 1,3 
                 (SELECT client_id -- first executes
                 FROM clients
                 WHERE state IN ('CA','NY'))
                 
                 
-- excercise 
-- sql statements to update comments in orders table
-- who has more than 3000 points
USE sql_store

UPDATE orders
SET comments = "gold customer"
WHERE customer_id IN (
        SELECT customer_id
        FROM customers
        WHERE points > 3000 )

 