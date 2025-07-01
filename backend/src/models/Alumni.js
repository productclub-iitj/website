import mongoose from "mongoose";

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  batchOf: {
    type: String,
    required: true,
    trim: true
  },
  linkedin: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  }
});

export default mongoose.model("Alumni", alumniSchema);
