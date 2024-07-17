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

module.exports = { getAllRecipes };
