import mongoose from "mongoose";
const achievementSchema = new mongoose.Schema({
  title: String,
  description: String
});
const Achievement = mongoose.model("Achievement", achievementSchema);