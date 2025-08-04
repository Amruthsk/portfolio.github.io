-- get customers who has order
SELECT 
    c.customer_id, 
    c.first_name, 
    o.order_id, 
    sh.name AS shipper
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id -- All customers with or without orders
LEFT JOIN shippers sh ON o.shipper_id = sh.shipper_id
ORDER BY c.customer_id;

-- order_date,order_id,first_name,shipper,status
SELECT o.order_date,
       o.order_id,
       c.first_name,
       s.name AS shipper,
       os.name AS status
FROM customers c
LEFT JOIN orders o
      ON c.customer_id = o.customer_id
LEFT JOIN shippers s
      ON o.shipper_id= s.shipper_id
LEFT JOIN order_statuses os
      ON o.status = os.order_status_id


SELECT o.order_date,
       o.order_id,
       c.first_name,
       s.name AS shipper,
       os.name AS status
FROM customers c
JOIN orders o
      ON c.customer_id = o.customer_id
LEFT JOIN shippers s
      ON o.shipper_id= s.shipper_id
LEFT JOIN order_statuses os
      ON o.status = os.order_status_id

SELECT o.order_date,
       o.order_id,
       c.first_name AS customer,
       s.name AS shipper,
       os.name AS status
FROM orders o
JOIN customers c
      ON c.customer_id = o.customer_id
LEFT JOIN shippers s
      ON o.shipper_id= s.shipper_id
LEFT JOIN order_statuses os
      ON o.status = os.order_status_id