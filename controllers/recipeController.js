// controllers/recipeController.js
const express = require("express");
const recipes = express.Router();

const {
  getAllRecipes,
  getRecipeByID,
  deleteRecipe,
  createRecipe,
  updateRecipe,
  searchRecipeByIngredient,
} = require("../queries/recipeQueries");

const {
  validateName,
  validateImage,
  validateIngredients,
  validateInstructions,
  validateServing,
  validatePrepareTime,
  validateIsFavorite,
} = require("../validators/recipesValidators");

recipes.get("/", async (req, res) => {
  let allRecipes = [];
  if (req.query) {
    const ingredients = req.query.ingredients.split(" ");
    allRecipes = await searchRecipeByIngredient(ingredients);
  } else {
    allRecipes = await getAllRecipes();
  }
  console.log(allRecipes);
  if (Array.isArray(allRecipes)) {
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
  } else if (recipe.received == 0) {
    res.status(404).json({ error: "Recipe not Found." });
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

recipes.delete("/:id", async (req, res) => {
  const recipe = await deleteRecipe(req.params.id);
  if (recipe.id) {
    res.status(200).json(recipe);
  } else if (recipe.received == 0) {
    res.status(404).json({ error: "Recipe not Found." });
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

recipes.post(
  "/",
  validateName,
  validateImage,
  validateIngredients,
  validateInstructions,
  validateServing,
  validatePrepareTime,
  validateIsFavorite,
  async (req, res) => {
    const recipe = await createRecipe(req.body);
    if (recipe.id) {
      res.status(200).json(recipe);
    } else {
      res.status(500).json({ error: "Someting went wrong!" });
    }
  }
);

recipes.put(
  "/:id",
  validateName,
  validateImage,
  validateIngredients,
  validateInstructions,
  validateServing,
  validatePrepareTime,
  validateIsFavorite,
  async (req, res) => {
    const { id } = req.params;
    const recipe = await updateRecipe(id, req.body);
    console.log(req.body);
    if (recipe.id) {
      res.status(200).json(recipe);
    } else {
      res.status(500).json({ error: "Someting went wrong!" });
    }
  }
);

module.exports = recipes;
