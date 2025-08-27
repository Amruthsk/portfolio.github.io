require("dotenv").config(); // for env connection

const db = require("./db.js");// db connects with knex_lab db

async function runExperiment() {
  try {
    console.log("Experiment started. Connecting to the workshop...");
    // All our Perception Actions will go here.

    //  A (Access): The Schema Builder is a substance accessed via the knex.schema property on an initialized Knex instance.
    //  B (Asynchronicity): All Schema Builder methods are asynchronous and return Promises, which resolve when the specified action is complete.
    //  H (Conditional ()): Methods like .createTableIfNotExists() and .hasTable() allow actions to be performed conditionally, based on the current state of the database schema.
    //[db.schema] --hasTable('engineers')--> [Promise] --> [exists: boolean]
    console.log("ACTION 1: Checking for 'engineers' table...");
    const exists = await db.schema.hasTable("engineers"); // Access via .schema (Claim A), await proves Promise (Claim B)

    if (exists) {
      console.log(
        "Perceived: The 'engineers' table already exists. This should not happen on the first run."
      );
    } else {
      console.log(
        "Perceived: The 'engineers' table has a state of (absence). Correct for the first run."
      );
    }

    // [The 'knex_lab' database ] → [does not contain an 'engineers' table ] ∵ [console output confirming its absence, which is the resolved value of the promise returned by hasTable

    //The Schema Builder is accessed via knex.schema (A), returns promises (B), and can conditionally check for a table's existence (H).

    //  C (Creation ): The .createTable(tableName, callback) method is the primary action for bringing a new [table]  into existence. The structure is defined within the callback function.
    //  D (Column Definition): Within the createTable callback, methods like .increments(), .string(colName, length), and .integer(colName) define the [column]  and their essential  {(qualities like data type and name)}.
    //  E ({Constraint} ): Methods can be chained to column definitions to apply { } of constraint, such as .primary(), .notNullable(), .unique(), and .defaultTo(value).

    //.createTable() brings a table into existence (C), with columns defined (D) and constraints applied (E).
    //[db.schema] --createTable('engineers', blueprint)--> [Promise] --> [SQL Execution]
    console.log("\nACTION 2: Creating the 'engineers' table blueprint...");
    if (!exists) {
      await db.schema.createTable("engineers", (table) => {
        table.increments("id").primary();
        table.string("name", 255).notNullable();
        table.string("specialty").defaultTo("General Engineering");
      });
      console.log("Perceived: Engineers table created.");
    } else {
      console.log("Skipping creation: 'engineers' table already exists.");
    }

    console.log(
      "Perceived: The 'createTable' promise resolved. The blueprint should now be a reality."
    );

    const nowExists = await db.schema.hasTable("engineers");
    console.log(
      `Perceived: Does the 'engineers' table exist now? ${nowExists}`
    );

    //The database schema ] → [now contains a tangible 'engineers' table with the specified structure ] ∵ [both the successful console log and the table's physical structure in MySQL Workbench

    //  F (Relational <-->): The .references(colName).inTable(tableName) chain is the action that establishes an inseparable relationship  between two tables, creating a foreign key constraint.
    //A foreign key relationship  can be established.

    console.log("\nACTION 3: Creating 'blueprints' table and linking it to 'engineers'...");

await db.schema.createTable("blueprints", (table) => {
  table.increments("id").primary();
  table.string("description").notNullable();
  table.integer("engineer_id").unsigned().references("id").inTable("engineers"); // Claim F
});
console.log(
  "Perceived: 'blueprints' table created and linked. A Samavāya has been formed."
);
    //  G (Modification & Destruction ): The Schema Builder possesses actions to modify existing structures (.alterTable(), .renameTable()) and to cause their permanent absence (Dhvaṃsa-abhāva) with methods like .dropTable(tableName).
  
console.log("\nACTION 4: Deleting the blueprints and engineers tables...");
await db.schema.dropTable("blueprints");
await db.schema.dropTable("engineers");
console.log(
  "Perceived: The dropTable promises resolved. The tables should now be in a state of Dhvaṃsa-abhāva."
);
const engineersGone = !(await db.schema.hasTable("engineers"));
console.log(`Perceived: Have the 'engineers' been erased? ${engineersGone}`);








}
    catch (error) {
    console.error("An error occurred during the experiment:", error);
  } finally {
    //  Destroying the connection. This is like closing the CAD software.
    await db.destroy();
    console.log("Experiment finished. Workshop connection closed.");
  }
}

//  Invoking the main function to start the experiment.
runExperiment();