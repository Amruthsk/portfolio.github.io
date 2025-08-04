-- get all employee and their manager
USE sql_hr


-- get all employee with their manager
SELECT
    e.employee_id,
    e.first_name,
    m.first_name AS manager
    
FROM employees e
JOIN employees m
   ON e.reports_to = m.employee_id
   
   -- get all employee with/without their manager
SELECT
    e.employee_id,
    e.first_name,
    m.first_name AS manager
    
FROM employees e
LEFT JOIN employees m
   ON e.reports_to = m.employee_id