// --- Sādhana Canto 5: The Interactive Environment ---

// --- Phase 1: Selection (Claim 8) ---
const containerDiv = document.getElementById("container");
const actionButton = document.getElementById("actionButton");
console.log("Proof of Selection:", containerDiv, actionButton);

// --- Phase 2: Attaching a Listener (Claim 5) ---
// The Karma of attaching a listener to the button node.
actionButton.addEventListener("click", function () {
  // This is the callback function. It only runs when the event occurs.
  console.log("Event triggered! Now manipulating DOM.");

  // --- Phase 3: Manipulation (Claim 9) ---
  // 1. Create a new [] (a paragraph element)
  const newItem = document.createElement("p");
  // 2. Give it a new {} (text content)
  newItem.textContent = `A new item added at ${new Date().toLocaleTimeString()}`;
  // 3. Perform the Karma of appending it to the container.
  containerDiv.appendChild(newItem); // This causes [DOM]→{New State}
});
console.log("Event listener is now attached and waiting.");

// --- The  (Inversion) ---
console.log("\n--- The Inversion ---");
// Attempting to select a non-existent element.
const phantomElement = document.getElementById("phantom");
console.log("Proof of failed selection:", phantomElement); // Pratyakṣa of [null]

try {
  // This will fail because you cannot add a listener to [null].
  phantomElement.addEventListener("click", () => {});
} catch (error) {
  console.log(" (Direct Proof) of Failure:", error.message);
}
