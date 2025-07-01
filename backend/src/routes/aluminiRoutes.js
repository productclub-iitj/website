import express from "express";
import Alumni from "../models/Alumni.js"; 

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.status(200).json(alumni);
  } catch (error) {
    console.error("Alumni fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch alumni data" });
  }
});

export default router;
