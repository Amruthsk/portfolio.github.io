CREATE TABLE orders_archived AS 
SELECT * FROM orders
-- right click truncate 
 
 -- copy subset of data  of orders placed before 2019
 SELECT *
 FROM orders
 WHERE order_date < '2019-01-01'
 
 -- use this as a subquery into a insert statment
INSERT INTO orders_archived
SELECT *
FROM orders
WHERE order_date < '2019-01-01'

-- Exercise
-- invoice table 
-- invoice archive
-- clien id to client name use it as subquery
-- only the invoice with payment date

USE sql_invoicing;

CREATE TABLE invoices_archived AS
SELECT*
FROM invoices

SELECT*
FROM invoices i
JOIN clients c
     ON i.client_id = c.client_id
     
SELECT*
FROM invoices i
JOIN clients c
     USING (client_id)
     
SELECT *
FROM invoices i
WHERE payment_date IS NOT NULL

CREATE TABLE invoices_archived AS
SELECT 
     i.invoice_id,
     i.number, 
     c.name AS client, 
     i.invoice_total,
	 i.payment_total,
	 i.invoice_date,  
     i.due_date,  
     i.payment_date
FROM invoices i
JOIN clients c
     ON i.client_id = c.client_id
WHERE payment_date IS NOT NULL

     
