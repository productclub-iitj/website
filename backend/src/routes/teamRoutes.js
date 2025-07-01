import express from "express";
import Team from "../models/Team.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const team = await Team.find();
    res.status(200).json(team);
  } catch (error) {
    console.error("Team fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch team data" });
  }
});

export default router;
