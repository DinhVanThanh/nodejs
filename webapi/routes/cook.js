var express = require("express");
var router = express.Router();
const cookModel = require("../models/cooking");

/* GET users listing. */
// router.get("/list/:name", async function (req, res, next) {
//   try {
//     const cooks = await cookModel.find({ name: req.params.name });
//     res.send(cooks);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
router.get("/list/all", async function (req, res, next) {
  try {
    const cooks = await cookModel.find({});
    res.send(cooks);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.post("/create", async function (req, res, next) {
  const cook = new cookModel(req.body);
  try {
    await cook.save();
    res.send(cook);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
