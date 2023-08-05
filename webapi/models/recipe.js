const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  prepTime: {
    type: Number,
  },
  cookTime: {
    type: Number,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  direction: [String],
  ingredient: [Schema.Types.ObjectId],
  videoUrl: {
    type: String,
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
