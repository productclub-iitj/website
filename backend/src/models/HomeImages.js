import mongoose from "mongoose";
const homeImageSchema = new mongoose.Schema({
  image: String,
});
const HomeImage = mongoose.model("HomeImage", homeImageSchema);