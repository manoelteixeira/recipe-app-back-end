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

async function createRecipe(recipe) {
  const queryStr =
    "INSERT INTO recipes(name, image, ingredients, instructions, serving, prepare_time, is_favorite) VALUES " +
    "($[name], $[image], $[ingredients], $[instructions], $[serving], $[prepare_time], $[is_favorite]) " +
    "RETURNING *;";
  try {
    const newRecipe = db.one(queryStr, recipe);
    return newRecipe;
  } catch (error) {
    return error;
  }
}

async function updateRecipe(id, recipe) {
  const keys = Object.keys(recipe).filter((key) => recipe[key] != undefined);
  const queryStr =
    "UPDATE recipes SET " +
    `${keys.map((key) => `${key}=$[${key}]`).join(", ")} ` +
    "WHERE id=$[id] RETURNING *;";
  try {
    const updatedRecipe = await db.one(queryStr, { ...recipe, id: id });

    return updatedRecipe;
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllRecipes,
  getRecipeByID,
  deleteRecipe,
  createRecipe,
  updateRecipe,
};
