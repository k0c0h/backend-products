const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function getAllProducts() {
  try {
    await client.connect();
    const db = client.db("EXAM3");
    const products = await db.collection("products").find({}).toArray();
    return products;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
}

module.exports = { getAllProducts };
