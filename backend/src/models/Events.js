import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  date: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },       // e.g. "speaker", "workshop"
  category: { type: String, required: true }    // "upcoming" or "past"
});

export default mongoose.model("Event", eventSchema);
