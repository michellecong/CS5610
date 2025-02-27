const { MongoClient } = require("mongodb");
// require("dotenv").config();
// const uri = process.env.MONGO_URL;

// const uri = process.env.MONGO_URL;
const uri =
  "mongodb+srv://congm:hYfW7lsBtkaSWanG@album-cluster.wqb0o.mongodb.net/?retryWrites=true&w=majority&appName=album-cluster";

const client = new MongoClient(uri);

module.exports = {
  connect: async function () {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");
  },
  addToDB: async function (doc) {
    const result = await client.db().collection(tasks).insertOne(data);
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
