// src/repositories/todoMysql.repository.js

class TodoMySQLRepository {

  insert(todoText) {
    // In a real app: const result = mysql.exec('INSERT INTO todos (text) VALUES (?)', [todoText]);
    console.log(`MySQL Repository: Executing SQL INSERT for: ${todoText}`);
    return {
      id: Math.floor(Math.random() * 1000),
      text: todoText,
      source: "MySQL_STUB",
    }; 
  }

  getAll() {
    console.log("MySQL Repository: Executing SQL SELECT ALL");
    // In a real app: return mysql.exec('SELECT * FROM todos');
    return [{ id: 999, text: "MOCK_MYSQL_DATA", source: "MySQL_STUB" }]; 
  }

  get(id) {
    console.log(`MySQL Repository: Executing SQL SELECT WHERE id=${id}`);
    // In a real app: return mysql.exec('SELECT * FROM todos WHERE id=?', [id]);
    return { id: id, text: "MOCK_MYSQL_ID", source: "MySQL_STUB" };
  }
}

module.exports = TodoMySQLRepository;
