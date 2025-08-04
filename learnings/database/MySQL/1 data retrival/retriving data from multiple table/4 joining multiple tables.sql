-- joining multiple tables
USE sql_store

SELECT * 
FROM orders o
JOIN customers c
   ON o.customer_id = c.customer_id
   

SELECT o.order_date, c.first_name,o.status
FROM orders o
JOIN customers c
   ON o.customer_id = c.customer_id
   
   
SELECT o.order_id, o.order_date, 
       c.first_name,c.last_name,
       os.name AS status
FROM orders o
JOIN customers c
   ON o.customer_id = c.customer_id
JOIN order_statuses os
   ON o.status = os.order_status_id
   
-- using sql invoicing
-- join payments with client name & payment method
USE sql_invoicing;

SELECT*
FROM payments  pa
JOIN clients c
    ON pa.client_id = c.client_id
JOIN payment_methods pm
    ON pa.payment_method = pm.payment_method_id
    
SELECT 
     pa.date, pa.invoice_id, pa.amount,
     c.name,
     pm.name
FROM payments  pa
JOIN clients c
    ON pa.client_id = c.client_id
JOIN payment_methods pm
    ON pa.payment_method = pm.payment_method_id
    
SELECT 
     pa.date, pa.invoice_id, pa.amount,
     c.name AS client,
     pm.name AS payment_method
FROM payments  pa
JOIN clients c
    ON pa.client_id = c.client_id
JOIN payment_methods pm
    ON pa.payment_method = pm.payment_method_id