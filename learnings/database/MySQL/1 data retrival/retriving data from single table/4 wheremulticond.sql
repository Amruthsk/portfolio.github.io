-- all customer after 1990 and 1000 points
SELECT *
FROM customers
WHERE birth_date >= '1990-01-01' AND points > '1000'


-- all customer after 1990 or 1000 points show if atleast one of the conditon
-- satisfied
SELECT *
FROM customers
WHERE birth_date >= '1990-01-01' or points > '1000'

-- all customer after 1990 or 1000 points and state va
      
SELECT *
FROM customers
WHERE birth_date >= '1990-01-01' or 
      (points > '1000' AND state = 'VA')
      
-- -- all customer not ( after 1990 or 1000 points  not show if atleast one of the conditon staisfied)
-- BORN before 1990 and less than 1000 point
SELECT *
FROM customers
WHERE NOT (birth_date >= '1990-01-01' or points > '1000')

-- Simplify not  take inverse of the  comparison operators
SELECT *
FROM customers
WHERE birth_date < '1990-01-01' AND points <= '1000'

-- From the order_items table, get the items
-- for order #6
-- where the total price is greater than 30 

SELECT *
FROM order_items
WHERE order_id = '6' AND unit_price*quantity > 30
