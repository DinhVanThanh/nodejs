var express = require("express");
var router = express.Router();
const categoryModel = require("../models/category");

router.get("/list/all", async function (req, res, next) {
  try {
    const categories = await categoryModel.find({});
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/create", async function (req, res, next) {
  const category = new categoryModel(req.body);
  try {
    await category.save();
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/update/:name", async function (req, res, next) {
  const filter = { name: req.params.name };
  try {
    console.log(req.body);
    const category = await categoryModel.findOneAndUpdate(filter, {
      image: req.body.image,
    });
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
