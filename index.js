const { configDotenv } = require("dotenv");
const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});
