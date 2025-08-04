-- selecting colums from multiple tables
-- orders tab -- customer tab

SELECT *
FROM orders

SELECT *
FROM customers

SELECT *
FROM orders
JOIN customers 
    ON orders.customer_id = customers.customer_id
    
SELECT order_id, first_name, last_name
FROM orders
JOIN customers 
    ON orders.customer_id = customers.customer_id    
    
-- display customer id ---present in both tables----error
SELECT order_id,customer_id ,first_name, last_name
FROM orders
JOIN customers 
    ON orders.customer_id = customers.customer_id 
    
-- prefix with table name for same column in multiple tables
SELECT order_id, orders.customer_id,first_name, last_name
FROM orders
JOIN customers 
    ON orders.customer_id = customers.customer_id 
    
-- get rid of repetation using alias
SELECT order_id, o.customer_id,first_name, last_name
FROM orders o
JOIN customers c
    ON o.customer_id = c.customer_id 
    
    
-- order items table
-- join with procdut table for each   order retun 
-- product id,name,quantity ,unit price

SELECT order_id ,p.product_id,p.name,oi.quantity,oi.unit_price
FROM order_items oi
JOIN products  p
    ON oi.product_id = p.product_id