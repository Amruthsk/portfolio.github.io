// Knex instance

// Import: [Node.js Runtime] → require('knex')() → [Knex Library ]
// Configure: [{client}, {connection}] → {Configuration}
// Create: [Knex Library]( {Configuration} ) → [Knex Instance  {⚡️}]
// Plan: [Instance {⚡️}].select().where() → [Query Plan ]
// Execute: [Query Plan ].then() → 💥 → [Database Result ]
// Destroy: [Instance].destroy() → [Connection Pool becomes Abhāva]

// brings a new, complex  ([the Knex instance]) into existence.

//[the Knex instance]|{[knex Function],[config_object]}

//[FileSystem] → require('knex') //knex imported - locate and load the 'knex' library module.→ [knex Function]

//[Node.js Runtime] → require('knex')() → [Knex Library]
//knex Function- potential for action
//[knex_function] + [config_object] → [commander_instance]- Query builder instance
// .env file - setup create ->create .gitignore file -> stage all files (including gitignore), remove .env from staging and commit

//[FileSystem] →node module -> require('knex') → [knex Function]

//{[{client}, {connection}] → {Configuration}

// [Knex Library]( {Configuration} ) → [Knex Instance  {no connection}]
// [Query bulider] + {db connection} --->[Knex instance]
//[Knex Instance] ＝ [Query Builder] + [Connection Pool Manager]

//[Instance {no connection}].select().where() → [Query Plan ]
//.toString() → only drafts SQL text  - no talk to db

//[Query Plan ].then() → connect → [Database]
//  [The Knex instance ] → [connects lazily] 
//.then(result) - connection from the pool- .then(...) → opens connection, executes, gets results talk to db
//delay + result or  errors .destroy() → closes all connections, cannot query anymore talk to db

//.destroy 
//closes the connection pool.
//[Instance].destroy() → [Connection Pool abscence]



//The Knex library is a function invoked with a configuration object containing client and connection details to create the instance
//  A (The Genesis ()): The Knex library is a function that must be invoked with a configuration object to bring the [Knex instance]  into existence.
//  B (The Essential {}): The configuration object must, at a minimum, possess the {qualities} of client (e.g., 'mysql', 'pg') and connection (an object with host, user, password, database details).

// brings a new, complex  ([the Knex instance]) into existence.
//[the Knex instance]|{[knex Function],[config_object]}
//[FileSystem] → require('knex') //knex imported - locate and load the 'knex' library module.→ [knex Function]
//knex Function- potential for action
//[knex_function] + [config_object] → [commander_instance]- Query builder instance
// .env file - setup create ->create .gitignore file -> stage all files (including gitignore), remove .env from staging and commit

require("dotenv").config(); // must to load .env file
const knex = require("knex");//knex imported - locate and load the 'knex' library module.
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "****" : "MISSING");


// .env file - setup create ->create .gitignore file -> stage all files (including gitignore), remove .env from staging and commit
const config = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

//[knex_function] + [config_object] → [commander_instance]- Query builder instance

const commander = knex(config);

// My application  → [now possesses a configured commander object ready for database interaction]
// successful execution of the script without connection errors

console.log("Commander has been appointed. Awaiting orders.");

//  C (The Locus of Power): The returned Knex instance is the central object—a "query builder"—and serves as the primary interface for all subsequent database (actions)
//  D (The Nature of Connection): The instance does not establish a connection to the database upon its creation. Connection is established "(lazily)" only when the first query is actually executed.

// The instance is the query builder interface, and it only forms a connection when a query is executed."
const missionPlan = commander
  .raw("SELECT 'Mission Plan Received' as status;")
  .toString();
console.log("Mission plan drafted (no connection made):", missionPlan);


 commander
  .raw("SELECT 'Comms Link Established' as status;")
  .then((result) => {
    console.log("First order executed (connection made):", result[0]);
  })
  .catch((err) => {
    console.error("Execution failed:", err);
  });


//   [The Knex instance ] → [connects lazily] 
// because [I perceived that .toString() executed without connecting, while .then() caused a delay and fetched data, proving the connection was made at the moment of execution]

//  E (The Management of Connections): By default, the Knex instance manages a "pool" of connections, allowing it to handle multiple concurrent queries efficiently without opening and closing a connection for each one.




//  F (The (Cessation) ): The instance possesses a .destroy() method, an explicit action  to close all open connections in the pool and terminate the link to the database.
commander
  .raw("SELECT 'Final Report' as status;")
  .then((result) => {
    console.log("Final order before decommissioning:", result[0]);
    return commander.destroy();
  })
  .then(() => {
    console.log("Commander decommissioned. All connections severed.");
    return commander.raw("SELECT 'Is anyone there?' as status;");
  })
  .catch((err) => {
    console.error(
      "Communication attempt after decommissioning failed as expected:",
      err.message
    );
  });

  //The .destroy() method ] → [permanently terminates the database connection pool ]