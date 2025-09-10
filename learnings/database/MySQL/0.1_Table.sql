

-- [?] → (CREATE DATABASE) →[fintech_vault][database]

CREATE DATABASE fintech_vault;

-- [context of my session]→ [fintech_vault]
-- (use)@[fintech_vault]

-- [Session Context] → (USE) @ [Database: X] → [Session Context ⊂ Database: X]


USE fintech_vault;

DROP TABLE users;


-- [?] → (CREATE TABLE) → [TABLE]<->{users, columns-(id{int,notnull},username{varchar(50),unique,created_at{timestamp}})}
--DDL

CREATE TABLE users (
    id INT NOT NULL,
    username VARCHAR(50) UNIQUE,
    created_at TIMESTAMP
);

--creation of row data
-- (INSERT INTO),(values)------>[user]{id, username},{value1,value2}
-- [Table] + (INSERT {new values}) → [Table + {New_Row}]

-- (INSERT [Values]) @ [Table] ⇒ [New Row ⊂ Table]

--(INSERT [Value: NULL]) -x-> [Column { NOT NULL}] ⇒ [Error]
INSERT INTO users (id, username)
VALUES (NULL, 'testuser');
--error

INSERT INTO users (id, username)
VALUES (1, 'raja');

INSERT INTO users (id, username)
VALUES (2, 'raji');


ALTER TABLE users
ADD COLUMN email VARCHAR(100);

-- [Table]{Col_A} + (ALTER ADD Col_B) → [Table]{Col_A, Col_B}


-- (ALTER TABLE)@[users]------(ADD COLUMN  Col_B)----> [users]{Col_A,
-- Col_B}

--[Table ↔ {Col_A}] → (ALTER) → [Table ↔ {{Col_A}, {Col_B}}]

-- (DESCRIBE)@[user]--->see the [user]<->column qualities
DESCRIBE users;

-- (DROP) --->[user]
DROP TABLE users;



-- (DROP) --->[fintech_vault]
DROP DATABASE fintech_vault;
