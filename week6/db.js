const { MongoClient, ObjectId } = require("mongodb");
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

      return result;
    } catch (e) {
      console.error(`Failed to add to DB: ${e}`);
    }
  },
  readAll: async function () {
    try {
      const cursor = await client.db("cs5610").collection("tasks").find();
      const data = await cursor.toArray();
      //    console.log(data);
      return data;
    } catch (err) {
      console.log("read all from db ", err);
    }
  },
  readOne: async function (filter) {
    try {
      const result = await client
        .db("cs5610")
        .collection("tasks")
        .findOne(filter);

      return result;
    } catch (err) {
      console.log("read one from db ", err);
    }
  },
  deleteOne: async function (filter) {
    try {
      const result = await client
        .db("cs5610")
        .collection("tasks")
        .deleteOne(filter);
      return result;
    } catch (err) {
      console.log("delete from db ", err);
    }
  },
};
