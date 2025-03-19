import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderId: {
      type: String,
      required: [true, "provide orderId"],
      unique: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    product_details: {
      name: String,
      image: Array,
    },
    payment_id: {
      type: String,
      debugger: true,
    },
    package_status: {
      type: String,
      default: "",
    },
    delivery_address: {
      type: mongoose.Schema.ObjectId,
      ref: "Address",
    },
    sub_TotalAmt: {
      type: Number,
      default: 0,
    },
    totalAmt: {
      type: Number,
      default: 0,
    },
    invioce_recive: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const orderModal = mongoose.model("Order", orderSchema);

export default orderModal;
