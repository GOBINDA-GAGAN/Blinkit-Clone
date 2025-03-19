import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db_URL = process.env.DATABASE_URL;

if (!db_URL) {
  throw new Error("No MongoDB connection string provided");
}

const  DbConnection=async()=>{
  try {
    await mongoose.connect(db_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

export default DbConnection;