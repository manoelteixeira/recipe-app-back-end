// controllers/recipeController.js
const express = require("express");
const recipes = express.Router();

const { getAllRecipes, getRecipeByID } = require("../queries/recipeQueries");

recipes.get("/", async (req, res) => {
  const allRecipes = await getAllRecipes();
  if (allRecipes[0]) {
    res.status(200).json(allRecipes);
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

recipes.get("/:id", async (req, res) => {
  const recipe = await getRecipeByID(req.params.id);
  console.log(recipe);
  if (recipe.id) {
    res.status(200).json(recipe);
  } else {
    res.status(404).json({ error: "Recipe not Found." });
  }
});

module.exports = recipes;
