const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Recipe App");
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});

module.exports = app;
