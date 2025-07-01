import express from "express";
import HomeImage from "../models/HomeImages.js"; 

const router = express.Router();

// GET all home images
router.get("/", async (req, res) => {
  try {
    const images = await HomeImage.find();
    res.status(200).json(images);
  } catch (error) {
    console.error("HomeImage fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch home images" });
  }
});

export default router;
