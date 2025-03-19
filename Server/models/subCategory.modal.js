import mongoose from "mongoose";
const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: true,
    },
    image: {
      type: String,
      default: "",
    },
    category: [
      {
        type: mongoose.Schema.ObjectIdentifier,
        ref: "Category",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const subCategoryModels = mongoose.model("SubCategory", subCategorySchema);
export default subCategoryModels;
