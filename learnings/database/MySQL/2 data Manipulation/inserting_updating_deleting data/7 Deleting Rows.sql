-- specific row
USE sql_invoicing 

SELECT *
FROM invoices
WHERE invoice_id = 1

DELETE FROM invoices
WHERE invoice_id = 1

-- subquery delete
SELECT *
FROM clients
WHERE name = 'Yadel'

SELECT *
FROM invoices
WHERE client_id = 3

DELETE FROM invoices
WHERE client_id = (
    SELECT *
    FROM clients
    WHERE name = 'Yadel'
);

