# [Folder Title]  
e.g., 01 – Retrieving from Single Table

## 🎯 Objectives
- Explain purpose of this module
- List key SQL statements (e.g. SELECT, WHERE)

## 🧪 Examples
Run queries in `examples.sql` using MySQL CLI, Workbench or VS Code.

## ✅ Learning Outcomes
By the end, you should be able to:
- Retrieve specific columns  
- Filter results  
- Sort and limit data

---

## 🔧 Setup
```sql
CREATE DATABASE IF NOT EXISTS learning;
USE learning;

-- create test data table
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), age INT);
INSERT INTO users (name, age) VALUES ('Alice', 30), ('Bob', 25), ('Carol', 35);
