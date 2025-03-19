import mongoose from "mongoose";

const addressScheme = new mongoose.Schema(
  {
    address_line: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    pin_code: {
      type: String,
    },
    country: {
      type: String,
    },
    mobile: {
      type: String,
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const AddressModel = new mongoose.model("Address", addressScheme);
export default AddressModel;
