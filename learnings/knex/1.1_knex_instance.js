
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