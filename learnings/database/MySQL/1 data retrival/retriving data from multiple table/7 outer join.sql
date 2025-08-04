-- join --> inner join
-- outer join ----2 types
-- left join /right join

-- get customers who has order
SELECT
    c.customer_id,
    c.first_name,
    o.order_id
FROM orders o
JOIN customers c
   ON o.customer_id = c.customer_id -- customer with order
ORDER BY c.customer_id

-- outer join to get all customer with owithout order
SELECT
    c.customer_id,
    c.first_name,
    o.order_id
FROM orders o
RIGHT JOIN customers c -- all record from the right table c
   ON o.customer_id = c.customer_id -- customer with order
ORDER BY c.customer_id

-- ALL records from left table is retured c
SELECT
    c.customer_id,
    c.first_name,
    o.order_id
FROM customers c
LEFT JOIN orders o
   ON o.customer_id = c.customer_id -- customer with order
ORDER BY c.customer_id

-- outer join
-- products with order items
SELECT
    p.product_id,
    p.name,
    oi.quantity
FROM products p
LEFT JOIN order_items oi
   ON p.product_id = oi.product_id -- customer with order
ORDER BY p.product_id

