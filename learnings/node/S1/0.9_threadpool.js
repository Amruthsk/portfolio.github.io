const crypto = require("crypto");

// we can increase threadpool size by
process.env.UV_THREADPOOL_SIZE = 6;

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("async 1 key generated");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("async 2 key generated");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("async 3 key generated");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("async 4 key generated");
});
//assigned to threadpool order of execution is no gaurentee

//top 4 all at a time

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("async 5 key generated");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("async 6 key generated");
});

// 5 and 6 takes time only at the end because it waits for the threadpool to become empty


