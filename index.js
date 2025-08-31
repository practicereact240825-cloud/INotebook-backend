const connectToMongo = require("./db")
const express = require("express");

connectToMongo();

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from iNotebook backend!");
});

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});