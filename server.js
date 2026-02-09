const http = require("http");
const productRoutes = require("./routes/productRoutes");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  productRoutes(req, res);
});

server.listen(3008, () => {
  console.log("Products backend running on http://localhost:3008");
});
