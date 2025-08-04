-- update the invoice table values of payment_total,payment date of invoice id
UPDATE invoices
SET 
   payment_total = 10,
   payment_date = '2025-05-01'
WHERE
   invoice_id = 1;

-- restore old values
UPDATE invoices
SET 
   payment_total = default,
   payment_date = default
WHERE
   invoice_id = 1;

-- update client payed 50% of payment total on due_date id 3
UPDATE invoices
SET 
   payment_total = invoice_total*0.5,
   payment_date = due_date
WHERE
   invoice_id = 3;
