const { MongoClient } = require("mongodb");


const url =
  "mongodb+srv://Node_db_user:@nodecluster.ztj1nyo.mongodb.net";


  const client = new MongoClient(url);


// [our db name]
const dbName = "Helloworld";


async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  const collection = db.collection("User");



  //create new user

  const data = {
    firstname: "Amruth",
    lastname: "S K",
    city: "Hosur",
    country: "India",
  };
  // //insert data- creating new documents
  // const insertResult = await collection.insertMany([data]);
  // console.log('Inserted documents =>', insertResult);

  //update

  // const updateResult = await collection.updateOne(
  //   { firstname: "Amruth" },
  //   { $set: { city: "Banglore" } }
  // );
  // console.log("Updated documents =>", updateResult);

  //read - find documents
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
