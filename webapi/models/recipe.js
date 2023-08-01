const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  time: {
    type: Number,
  },
  type_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
