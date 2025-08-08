// ✅ Problem: Print all possible pairs of numbers from two different arrays.

let players = ["Virat", "Rohit"];
let opponents = ["AUS", "ENG", "SA"];

for (let i = 0; i < players.length; i++) {
  let currentPlayer = players[i];

  for (let j = 0; j < opponents.length; j++) {
    let currentOpponent = opponents[j];
    console.log(currentPlayer + " vs " + currentOpponent);
  }
}

function generatePairs(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }

  const resultPairs = [];

  for (const item1 of arr1) {
    for (const item2 of arr2) {
      resultPairs.push([item1, item2]);
    }
  }

  return resultPairs;
}

console.log(generatePairs(players, opponents)); // Expected: 6 pairs. Correct.
console.log(generatePairs(players, [])); // Expected: []. Correct.
console.log(generatePairs(null, opponents)); // Expected: []. Correct.

// Validation using the length .
const result = generatePairs(players, opponents);
console.log(result.length === players.length * opponents.length); // Expected: true. Correct.

console.log("independent");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}

console.log("<i limit");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}

console.log("=i limit");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(i, j);
  }
}

console.log("j=i ; j>0limit, j-- reverse one");
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(i, j);
  }
}

console.log("j=i ; j>0limit, j-- reverse both");
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
