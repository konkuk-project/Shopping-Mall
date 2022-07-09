const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!!!!!!!!!!!!");
});

app.get("/cart", (req, res) => {
  res.send("This is cart page");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
