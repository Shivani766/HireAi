import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.DB_URL;

  if (!mongoUri) {
    throw new Error("Missing MongoDB connection string. Set MONGO_URI or DB_URL in .env.");
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4 // Use IPv4
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.error("Please check:");
    console.error("1. Your network connection");
    console.error("2. MongoDB connection string in .env file");
    console.error("3. IP whitelist in MongoDB Atlas");
    throw error;
  }
};

export default connectDB;

