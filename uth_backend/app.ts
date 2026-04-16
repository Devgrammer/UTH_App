export {};
const dotenv = require("dotenv");
dotenv.config({ override: true });
const cors = require("cors");
const express = require("express");
const app = express();
const connectToDB = require('./db/db')

connectToDB();

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello UTH");
});

module.exports = app;
