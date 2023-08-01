const mongoose = require("mongoose");

const CookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Cook = mongoose.model("Cook", CookSchema);

module.exports = Cook;
