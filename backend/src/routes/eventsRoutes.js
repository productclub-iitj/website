import express from "express";
import Events from "../models/Events.js"; 

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json(events);
  } catch (error) {
    console.error("Events fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch events data" });
  }
});

export default router;
