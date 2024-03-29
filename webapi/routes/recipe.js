var express = require("express");
var router = express.Router();
const recipeModel = require("../models/recipe");

router.get("/list/all", async function (req, res, next) {
  try {
    const cooks = await recipeModel.find({}).populate("category");
    res.send(cooks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/list/:name", async function (req, res, next) {
  try {
    const cooks = await recipeModel
      .find({ name: req.params.name })
      .populate("type_id");
    res.send(cooks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/create", async function (req, res, next) {
  const cook = new recipeModel(req.body);
  try {
    await cook.save();
    res.send(cook);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/update/:id", async function (req, res, next) {
  const filter = { _id: req.params.id };

  try {
    const category = await recipeModel.updateMany(filter, req.body, {
      runValidators: true,
    });
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
