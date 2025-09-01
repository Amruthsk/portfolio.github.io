
// ('require' @ {path: 'fs'}) → [const fs] { .promises API }
const fs = require("fs").promises;


console.log(
  'General: "Scout, take this secure briefcase (Promise) and report back."'
);

//[promise](.then{data})(.catch{error})
//// (fs.readFile @ ['./intel.txt']) → [intelPromise]{pending}
const intelPromise = fs.readFile("./intel.txt", "utf8");

//[intelPromise]{pending} ↔ { .then: [Function], .catch: [Function] }

//[intelPromise]{fulfilled: [Data]} ⇒ ( .then @ [Data] )

intelPromise
  .then((data) => {
    console.log(
      'Artillery Officer (.then): "Briefcase unlocked. Intel received:"'
    );
    console.log(data);
  })

  //⇒ [intelPromise]{rejected: [Error]} ⇒ ( .catch @ [Error] )
  .catch((err) => {
    console.log('Rescue Team (.catch): "Distress beacon activated! Reason:"');
    console.error(err.message);
  });

console.log('General: "Awaiting report from the field..."');


console.log(
  'General: "The briefcase is in transit. I will continue planning."'
);