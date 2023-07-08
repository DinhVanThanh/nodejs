var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({
    currentStep: 1,
    tests: [
      {
        step: 1,
        active: true,
        options: {
          question: "how old are you ?",
          answer: [
            {
              text: "12",
            },
            {
              text: "23",
            },
            {
              text: "56",
            },
          ],
        },
      },
      {
        step: 2,
        active: false,
        options: {
          question: "what your name ?",
          answer: [
            {
              text: "Matt",
            },
            {
              text: "Lisa",
            },
            {
              text: "Josh",
            },
          ],
        },
      },
    ],
  });
});

module.exports = router;
