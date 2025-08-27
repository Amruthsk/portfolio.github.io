//Knex.js Query Builder
//The Query Builder is a plan, not the result.

require("dotenv").config(); // for env connection



// knex('soldiers') → [Plan]

// [Plan v1.0] → .where() → [Plan v1.1] → .select() → [Plan v1.2]

// [Plan v1.2] → .toSQL() → 📜 "select \rank` from `soldiers`..."`

// ⚡️ await [Plan v1.2]  -> [📦, 📦]

// knex('table') → [Plan] → .where() → [Plan v1.1] ┬→ ⚡️ await → [📦, 📦, ...]
// └→ .toSQL() → 📜 "SELECT..."
 
//connecting the knex by importing file (which has knex instance - db)

//(knex('soldiers'))-----> [QueryPlanObject] not data but its  plan


//Query Builder object = knex([table])
//Query Builder instance-object

//-- create plan - [queryBuilderObject] - (select(), .where(), .join(), and .orderBy() )-->[modiefies internal queryBuilderObject- sql query]

//-- create sql query - [sqlPlan]|{generated SQL string}

//--internal state ------(toSQL())---- readable SQL command- {generated SQL string} still not executed

// await, .then()----------> execute Knex to send the SQL to MySQL.
// result - array of result (table values)

// knex('table') → [QueryPlanObject]

// .select/.where → refine plan

// .toSQL() → see plan in text form

// await → execute & get real data
//  ┌─────────────────────────────────────────────┐
//  │ knex('soldiers')                            │
//  │   → Creates a Query Builder Object           │
//  │   (not SQL, not data — just a plan object)   │
//  └─────────────────────────────────────────────┘
//                       │
//                       ▼
//  ┌─────────────────────────────────────────────┐
//  │ .select("name", "rank").where("status","active") │
//  │   → Modifies internal plan state             │
//  │   (adds SELECT + WHERE clauses)              │
//  └─────────────────────────────────────────────┘
//                       │
//                       ▼
//  ┌─────────────────────────────────────────────┐
//  │ .toSQL()                                    │
//  │   → Shows generated SQL string              │
//  │   (human-readable plan, still not executed) │
//  └─────────────────────────────────────────────┘
//                       │
//                       ▼
//  ┌─────────────────────────────────────────────┐
//  │ await refinedQuery  (or .then())            │
//  │   → Executes query                          │
//  │   → MySQL returns actual data rows          │
//  │   → JavaScript gets an array of objects     │
//  └─────────────────────────────────────────────┘
//                       │
//                       ▼
//  ┌─────────────────────────────────────────────┐
//  │ knex.destroy()                              │
//  │   → Closes DB connection                    │
//  │   → Prevents hanging Node.js process        │
//  └─────────────────────────────────────────────┘



//configured connection - knex imported from db
const knex = require("./db.js");

//  A (The Core Substance): The Query Builder is a JavaScript object, not the data itself.
//  B (The Act of Creation): A Query Builder instance is created by calling the knex object with a table name as an argument (e.g., knex('users')).
//The Query Builder is an object created by calling knex with a table name.

async function runExperiment() {
  console.log(
    "--- Perception Action 1 & 2: Creating and Observing the object ---"
  );
  const queryBuilderObject = knex("soldiers"); // querybuilder

  console.log("Type of queryBuilderObject:", typeof queryBuilderObject);
  console.log("Is it an array?", Array.isArray(queryBuilderObject));

  //  C (The Nature of () - Chaining): Methods like .select(), .where(), .join(), and .orderBy() can be chained onto the Query Builder instance.
  //  D (The Effect of ()): Each chained method does not execute the query; instead, it modifies the internal state of the Query Builder object, adding a component to the final SQL query.
  // E (The Power of Perception - .toSQL()): The .toSQL() method can be called on a Query Builder instance to inspect the raw SQL query it has constructed, without executing it against the database.
  console.log(
    "\n--- Perception Action 3: Modifying and Inspecting the Plan ---"
  );
  const refinedQuery = queryBuilderObject
    .select("name", "rank")
    .where("status", "active");

  const sqlPlan = refinedQuery.toSQL();

  console.log("The generated SQL plan:", sqlPlan.sql);

  //  F (The Trigger - "Thenable"): The Query Builder object is a "thenable," meaning it has a .then() method. This allows it to be treated like a Promise, and it is this act of awaiting it or calling .then() that triggers the execution of the query.
  //  G (The Final Result): When the Query Builder is executed (via await or .then()), it returns the data retrieved from the database, typically as an array of objects.
  console.log("\n--- Perception Action 4: Executing the Plan ---");
  // Awaiting the object executes the query and returns the real data.
  const results = await refinedQuery;
  console.log("Actual data from database:", results);
  console.log("Type of results:", typeof results);
  console.log("Is it an array?", Array.isArray(results));

  refinedQuery.then(results => {
    console.log("Actual data from database:", results);
    console.log("Is it an array?", Array.isArray(results));
    }).catch(error => {
      console.error("The plan failed:", error);

}).finally(() => {
   console.log("Mission complete. Terminating connection.");
    knex.destroy();
 knex.destroy()
})

}
runExperiment();