const mongoose = require("mongoose");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var cookRouter = require("./routes/cook");
var cors = require("cors");
var app = express();
const port = 4000;
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use("/", indexRouter);
app.use("/cook", cookRouter);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb://mongoadmin:secret@localhost:27017/cooking?authSource=admin"
  );
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = app;
