-- //Character Set & Collation


--  A (The {Dictionary} ): A Character Set is a fundamental quality that defines a set of symbols and their corresponding binary encodings. It is the "dictionary" of characters the system recognizes.
--  B (The {Rules} ): A Collation is a set of rules for comparing and sorting the characters within a specific character set. It is the "grammar and alphabetization rulebook" for the dictionary.
--  C (Inseparable <->): Every character set must have at least one collation. A character set (the dictionary) cannot exist without a collation (the rules), and vice versa. They are an inseparable pair.
--  D (Hierarchical Inheritance): These qualities can be defined at four levels: Server, Database, Table, and Column. A lower level (like a Column) inherits the setting from its parent (the Table) unless explicitly overridden. The most specific definition always wins.
--  E (Behavioral Impact): The chosen collation directly impacts the result of sorting (ORDER BY) and comparison (WHERE clauses). The most common distinctions are _ci (case-insensitive), _cs (case-sensitive), and _bin (binary).
--  F (The Modern Standard): The utf8mb4 character set is the universally recommended standard. It is a superset of older utf8 and fully supports the entire Unicode standard, including multi-byte characters like emojis, ensuring no data is ever lost or misinterpreted.