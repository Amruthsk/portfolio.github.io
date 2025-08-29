DQL - Data Query language
[Table] → (SELECT) → see{[Row₁], [Row₂]...}


USE fintech_db;

CREATE TABLE users3 (
    user_id INT PRIMARY KEY,
    username VARCHAR(100) NOT NULL
);

-- SELECT *
-- FROM [table] ` retrieves all columns from all rows.

INSERT INTO users3 (user_id, username)
VALUES (101, 'alice'),
    (102, 'bob'),
    (103, 'charlie'),
    (104, 'david'),
    (105, 'eve');

-- all qualities
SELECT *
FROM users3

--selective qualities
SELECT username
FROM users3;


--Filtering the Substances
--The `WHERE` clause filters which row
SELECT user_id,
    username
FROM users
WHERE username = 'charlie';



-- Ordering the Perception *- to result

SELECT user_id,
    username
FROM users
ORDER BY username DESC;

--Limiting the Perception

SELECT user_id,username
FROM users
WHERE user_id > 101
ORDER BY username ASC
LIMIT 2;


-- see * the data;
-- you ask a sophisticated question
-- and receive a precise,
-- ordered,
-- -- and concise answer.Mastering `SELECT` is mastering the art of asking the right questions to govern



target [Table] → (SELECT * - all columns) → see{[Row₁], [Row₂]...}

target [Table] → (SELECT - {specific columns}) → see{[Row₁], [Row₂]...}

target [Table] → (
    WHERE - hetu condition to FILTER ∵ { user_id > 101 }
)----(SELECT * - specific columns ) → see{[Row₁], [Row₂]...}


target [Table] → (FILTER ∵ { user_id > 101 }) → (SELECT { username, user_id }) → (
    ORDER BY { username }
) → (
    LIMIT 2
) ⇒ SEE({[Row₁], [Row₂]...})


FROM →
WHERE →
ORDER BY →
SELECT →
LIMIT

[Table] → (Filter ∵WHERE) → [Set₁] → (Sort ∵ORDER BY) → [Set₂] → (Reduce Qualities ∵SELECT) → [Set₃] → (Restrict Quantity ∵LIMIT) → ⇒ [Final Result]