const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const db = {};

const connectDB = async () => {
  await client.connect();
  console.log("DB connect");
  const database = client.db("lavie_store_db");
  db.products = database.collection("products");
  db.users = database.collection("users");
}

module.exports = { connectDB, db};