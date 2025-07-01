import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`\n✅ MongoDB connected!`);
    console.log(`🗂  Database: ${connectionInstance.connection.name}`);
    console.log(`📍 Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ MONGODB connection FAILED:", error.message);
    process.exit(1);
  }
};

export default connectDB;
