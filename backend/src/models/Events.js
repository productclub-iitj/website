import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true,
    trim: true
  }
});

export default mongoose.model("Events", eventsSchema);
