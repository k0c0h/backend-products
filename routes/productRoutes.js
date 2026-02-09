const { getAllProducts } = require("../models/productModel");

async function productRoutes(req, res) {
  if (req.method === "GET" && req.url === "/products") {
    const products = await getAllProducts();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  }
}

module.exports = productRoutes;
