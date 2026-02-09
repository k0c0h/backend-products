const http = require("http");
const productRoutes = require("./routes/productRoutes");

const PORT = process.env.PORT || 3008;

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

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Products backend running on port ${PORT}`);
});
