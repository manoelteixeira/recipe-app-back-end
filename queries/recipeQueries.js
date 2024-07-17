// queries/recipeQueries.js
const db = require("../db/dbConfig.js");

async function getAllRecipes() {
  try {
    const allRecipes = await db.many("SELECT * FROM recipes;");
    return allRecipes;
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

module.exports = { getAllRecipes, getRecipeByID };
