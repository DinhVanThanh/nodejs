const mongoose = require("mongoose");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
const port = 3000;
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://mongoadmin:secret@127.0.0.1:27017");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = app;
