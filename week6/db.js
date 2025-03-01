const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);

module.exports = {
  connect: async function () {
    await client.connect();
    console.log("Connected to MongoDB");
  },
  addToDB: async function (doc) {
    try {
      const result = await client
        .db("cs5610")
        .collection("tasks")
        .insertOne(doc);

      console.log(`Added to DB: ${result.insertedId}`);
    } catch (e) {
      console.error(`Failed to add to DB: ${e}`);
    }
  },
};
