// validators/recipesValidators.jsvalidators/recipesValidators.js

function validateName(req, res, next) {
  if (req.method != "POST" && !req.body.name) {
    req.body.name = undefined;
    next();
  } else if (!req.body.name) {
    res.status(400).json({ error: "name is required." });
  } else if (typeof req.body.name != "string") {
    res.status(400).json({ error: "name must be a string" });
  } else {
    next();
  }
}

function validateImage(req, res, next) {
  if (!req.body.image) {
    req.body.image = undefined;
    next();
  } else if (typeof req.body.image != "string") {
    res.status(400).json({ error: "image must be a string" });
  } else {
    next();
  }
}

function validateIngredients(req, res, next) {
  if (req.method != "POST" && !req.body.ingredients) {
    req.body.ingredients = undefined;
    next();
  } else if (!req.body.ingredients) {
    res.status(400).json({ error: "ingredients is required." });
  } else if (!Array.isArray(req.body.ingredients)) {
    res.status(400).json({ error: "ingredients must be an array." });
  } else if (req.body.ingredients.length == 0) {
    res.status(400).json({ error: "ingredients array cannot be empty" });
  } else {
    next();
  }
}

function validateInstructions(req, res, next) {
  if (req.method != "POST" && !req.body.name) {
    req.body.name = undefined;
    next();
  } else if (!req.body.instructions) {
    res.status(400).json({ error: "instructions is required." });
  } else if (!Array.isArray(req.body.instructions)) {
    res.status(400).json({ error: "instructions must be an array." });
  } else if (req.body.instructions.length == 0) {
    res.status(400).json({ error: "instructions array cannot be empty" });
  } else {
    next();
  }
}

function validateServing(req, res, next) {
  if (!req.body.serving) {
    req.body.serving = undefined;
    next();
  } else if (!Number.isInteger(req.body.serving)) {
    res.status(400).json({ error: "serving must be an integer" });
  } else if (req.body.serving <= 0) {
    res.status(400).json({ error: "serving must be positive" });
  } else {
    next();
  }
}

function validatePrepareTime(req, res, next) {
  if (!req.body.prepare_time) {
    req.body.prepare_time = undefined;
    next();
  } else if (!Number.isInteger(req.body.prepare_time)) {
    res.status(400).json({ error: "prepare_time must be an integer" });
  } else if (req.body.prepare_time <= 0) {
    res.status(400).json({ error: "prepare_time must be positive" });
  } else {
    next();
  }
}

function validateIsFavorite(req, res, next) {
  if (req.body.is_favorite == undefined) {
    console.log("ok");
    req.body.is_favorite = undefined;
    next();
  } else if (typeof req.body.is_favorite != "boolean") {
    res.status(400).json({ error: "is_favorite must be a boolean" });
  } else {
    next();
  }
}

module.exports = {
  validateName,
  validateImage,
  validateIngredients,
  validateInstructions,
  validateServing,
  validatePrepareTime,
  validateIsFavorite,
};
