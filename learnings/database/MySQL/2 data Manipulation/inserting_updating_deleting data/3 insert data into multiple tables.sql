-- Inserting Hierarchical rows
-- orders - parents
INSERT INTO orders (customer_id, order_date, status )
VALUES (1, '2025-05-01',1);

-- order items - children
INSERT INTO order_items
VALUES  
       (LAST_INSERT_ID(),3,2,2.95 ),
       (LAST_INSERT_ID(),2,1,3.95 )


-- built in function LAST_INSERT_ID() to get id of newly inserted record