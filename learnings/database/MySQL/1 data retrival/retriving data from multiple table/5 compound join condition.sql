-- using and joining 2 columns  to identify when the column is has no unique record
SELECT*
FROM order_items oi
JOIN order_item_notes oin
   ON oi.order_id = oin.order_id
   AND oi.product_id = oin.product_id
   