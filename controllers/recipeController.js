const express = require("express");
const recipes = express.Router();

const { getAllRecipes } = require("../queries/recipeQueries");

recipes.get("/", async (req, res) => {
  const allRecipes = await getAllRecipes();
  if (allRecipes[0]) {
    res.status(200).json(allRecipes);
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

module.exports = recipes;
