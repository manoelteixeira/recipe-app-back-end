// controllers/recipeController.js
const express = require("express");
const recipes = express.Router();

const {
  getAllRecipes,
  getRecipeByID,
  deleteRecipe,
  createRecipe,
  updateRecipe,
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
  const allRecipes = await getAllRecipes();

  if (allRecipes[0]) {
    res.status(200).json(allRecipes);
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

recipes.get("/:id", async (req, res) => {
  const recipe = await getRecipeByID(req.params.id);
  if (recipe.id) {
    res.status(200).json(recipe);
  } else {
    res.status(404).json({ error: "Recipe not Found." });
  }
});

recipes.delete("/:id", async (req, res) => {
  const recipe = await deleteRecipe(req.params.id);
  if (recipe.id) {
    res.status(200).json(recipe);
  } else {
    res.status(404).json({ error: "Recipe not Found." });
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
