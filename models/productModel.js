const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://mrsproudd:mrsproudd@cluster0.ad7fs0q.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function getAllProducts() {
  await client.connect();
  const db = client.db("EXAM3");
  return db.collection("products").find({}).toArray();
}

module.exports = { getAllProducts };
