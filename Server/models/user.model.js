import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name"],
  },
  email: {
    type: String,
    required: [true, "please provide email"],

    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide password"],
  },
  avtar: {
    type: String,
    default: false,
  },
  mobileNumber: {
    type: String,
    default: null,
  },
  refreshToken: {
    type: String,
    default: "",
  },
  verify_email: {
    type: Boolean,
    default: false,
  },

  last_login_date: {
    type: Date,
    default: "",
  },
  status: {
    type: String,
    enum: ["Active", "Inactive", "Suspended"],
    default: "Active",
  },
  address_details: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "address",
    },
  ],
  sopping_cart: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "CartProduct",
    },
  ],
  orderHistory: {
    type:mongoose.Schema.ObjectId,
    ref:"Order"

  },
  forgot_password_otp: {
    type: String,
    default: null,
  },
  forgot_password_expire: {
    type: Date,
    default: "",
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
},{timestamps:true});

const userModel= mongoose.model(User, userSchema);
export default userModel
