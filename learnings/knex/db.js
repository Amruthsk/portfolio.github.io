//import knex library [Node.js Runtime] → require('knex')() → [Knex Library ]
const knex = require("knex");


// Configure: [{client}, {connection}] → {Configuration}
const config = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};


// Create: [Knex Library]( {Configuration} ) → [Knex Instance  {⚡️}]
// knex instance 
const connection = knex(config);


//[Knex Instance] ＝ [Query Builder] + [Connection Pool Manager]

// make connections available to other files
module.exports = connection;