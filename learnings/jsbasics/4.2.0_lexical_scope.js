// Phase 1: The Command Structure (Writing the code)

// The General's orders are globally visible.
const generalOrders = "Win the war.";

// Sergeant Smith sets up his unit.
function setupUnitSmith() {
  const sergeantOrders = "Take that hill.";

  function soldierAction() {
    // This soldier is DEFINED inside Smith's unit.
    const soldierTask = "I am scouting.";
    console.log("--- Soldier Reporting ---");
    console.log(`My Task: ${soldierTask}`); // Accessing own scope
    console.log(`My Sergeant's Orders: ${sergeantOrders}`); // Accessing parent scope
    console.log(`The General's Orders: ${generalOrders}`); // Accessing global scope
    console.log("------------------------");
  }

  return soldierAction;
}

// Sergeant Jones sets up his unit, for our final test.
function deployFromUnitJones(someSoldier) {
  const sergeantOrders = "Defend this position."; // A CONFLICTING order!
  console.log("\n>>> Sergeant Jones is giving a command...");
  someSoldier(); // CALLING the soldier from a different context.
}

// Let's create our soldier from Unit Smith
const soldierFromSmith = setupUnitSmith();

// Calling the soldier directly to see what they know.
soldierFromSmith();

// The General tries to see the Sergeant's orders. This will fail.
try {
  console.log(sergeantOrders);
} catch (e) {
  console.log(
    "\n>>> The General cannot see the Sergeant's private orders. ERROR!"
  );
}

// Let's see what the soldier does when CALLED from Jones's unit.
deployFromUnitJones(soldierFromSmith);

//scope
function createOperative(missionName) {
  const secretCode = Math.floor(Math.random() * 10000);
  console.log(
    `Commander: Briefing operative for mission '${missionName}'. Secret code is ${secretCode}.`
  );

  // This is the operative we are returning
  return function reportStatus() {
    console.log(
      `Operative: Reporting for duty. My mission is '${missionName}'. My secret code is ${secretCode}.`
    );
  };
}


createOperative('red');


createOperative('blue');

const operativeAlpha = createOperative("Alpha");
operativeAlpha();




const operativeBravo = createOperative("Bravo");
operativeAlpha();
operativeBravo();

console.log(secretCode);// error