
function dispatchScout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Bridge is clear.");
    }, 2000);
  });
}

async function executePlan() {
  console.log("Operation begins.");

  const scoutReport = await dispatchScout(); // First pause (2s)
  console.log(`1. Scout Report: "${scoutReport}"`);

  console.log("Plan proceeds to next step based on scout's report.");

  const engineerReport = await dispatchScout(); // Second pause (2s)
  console.log(`2. Engineer Report: "${engineerReport}"`);

  console.log("Operation complete.");
}

executePlan();