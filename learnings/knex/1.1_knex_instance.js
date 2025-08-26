// Knex instance

//The Knex library is a function invoked with a configuration object containing client and connection details to create the instance
//  A (The Genesis ()): The Knex library is a function that must be invoked with a configuration object to bring the [Knex instance]  into existence.
//  B (The Essential {}): The configuration object must, at a minimum, possess the {qualities} of client (e.g., 'mysql', 'pg') and connection (an object with host, user, password, database details).

// brings a new, complex  ([the Knex instance]) into existence.
//[FileSystem] → require('knex') → [knex Function]
//knex Function- potential for action
const knex = require("knex");//knex imported - locate and load the 'knex' library module.


const config = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

//[knex_function] + [config_object] → [commander_instance]- Query builder instance

const commander = knex(config);

console.log("Commander has been appointed. Awaiting orders.");

//  C (The Locus of Power): The returned Knex instance is the central object—a "query builder"—and serves as the primary interface for all subsequent database actions (Karma).
//  D (The Nature of Connection): The instance does not establish a connection to the database upon its creation. Connection is established "lazily" only when the first query is actually executed.
//  E (The Management of Connections): By default, the Knex instance manages a "pool" of connections, allowing it to handle multiple concurrent queries efficiently without opening and closing a connection for each one.
//  F (The Cessation Karma): The instance possesses a .destroy() method, an explicit action (Karma) to close all open connections in the pool and terminate the link to the database.
