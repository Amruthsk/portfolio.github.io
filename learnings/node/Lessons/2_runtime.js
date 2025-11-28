// The Logic: Attempting to access the Global Scope
try {

  // 1. Browser Context
  // console.log(window.innerHeight);

  // 2. Node Context
  console.log(process.memoryUsage());

} catch (e) {
  console.log("Feature not implemented in this Runtime");
}
