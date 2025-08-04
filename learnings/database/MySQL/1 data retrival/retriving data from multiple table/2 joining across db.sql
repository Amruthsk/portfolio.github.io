-- joining across db we'r in db store  connecting db inventory
SELECT * 
FROM order_items oi
JOIN sql_inventory.products p
    ON oi.product_id = p.product_id;
    
-- joining across db we'r in db inventory  connecting db store
USE sql_inventory

SELECT * 
FROM products p
JOIN sql_store.order_items oi
    ON oi.product_id = p.product_id;