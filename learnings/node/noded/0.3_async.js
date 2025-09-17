
console.log("1. Script Start - The Cook is ready."); // Synchronous

setTimeout(() => {
  console.log("4. Callback Fired - The assistant shouted 'Steak Up!'"); // Asynchronous (Callback)
}, 2000); // 2-second delay

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The steak (future value) is ready.");
  }, 3000); // 3-second delay
});

promise.then((value) => {
  console.log("5. Promise Resolved - ", value); // Asynchronous (Promise .then)
  return "Now I will get the sauce."; // This returns a new promise
}).then((nextValue) => {
  console.log("6. Promise Chained - ", nextValue); // Asynchronous (Second .then)
});

console.log("2. Script End - The Cook is already taking new orders."); // Synchronous

async function handleVipOrder() {
  console.log("7. VIP Order Placed.");
  const steakResult = await promise; // Pauses execution *within this function only*
  console.log("8. VIP Awaited and Received:", steakResult);
  console.log("9. VIP Order Complete.");
}



console.log("3. Main script is completely finished. The event loop is now waiting.");