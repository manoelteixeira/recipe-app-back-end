const express = require("express");
const recipes = express.Router();

const { getAllRecipes } = require("../queries/recipeQueries");
