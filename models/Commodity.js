const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const commoditySchema = mongoose.Schema(
  {
    commodity_title: {
      type: String,
      required: [true, "Commodity Title is required"],
      trim: true,
      text: true,
    },
    purity: {
      type: Number,
      required: [true, "Purity is required"],
    },
    unit: {
      type: Number,
      required: [true, "Unit is required"],
    },
    unitLabel: {
      type: String,
      required: [true, "Unit Label is required"],
    },
    charges: {
      type: Number,
    },
    premium: {
      type: Number,
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Commodity", commoditySchema);
