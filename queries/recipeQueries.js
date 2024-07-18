// queries/recipeQueries.js
const db = require("../db/dbConfig.js");

async function getAllRecipes() {
  try {
    const recipies = await db.many("SELECT * FROM recipes;");
    return recipies;
  } catch (error) {
    return error;
  }
}

async function getRecipeByID(id) {
  const queryStr = "SELECT * FROM recipes WHERE id=$[id]";
  try {
    const recipe = await db.one(queryStr, { id: id });
    return recipe;
  } catch (error) {
    return error;
  }
}

async function deleteRecipe(id) {
  const queryStr = "DELETE FROM recipes WHERE id=$[id] RETURNING *;";
  try {
    const recipe = await db.one(queryStr, { id: id });
    return recipe;
  } catch (error) {
    return error;
  }
}

module.exports = { getAllRecipes, getRecipeByID, deleteRecipe };
