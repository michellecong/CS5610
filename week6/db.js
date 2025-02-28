const { MongoClient } = require("mongodb");
// require("dotenv").config();
// const uri = process.env.MONGO_URL;

// const uri = process.env.MONGO_URL;
const uri =
  "mongodb://admin1:adminadmin@cluster-5610-shard-00-00.r4noh.mongodb.net:27017,cluster-5610-shard-00-01.r4noh.mongodb.net:27017,cluster-5610-shard-00-02.r4noh.mongodb.net:27017/?replicaSet=atlas-9ge9er-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster-5610";
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
