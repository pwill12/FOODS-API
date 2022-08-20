const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    categories: { type: Array },
    price: { type: Number , required: true},
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", FoodSchema);