import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/db/index.js";
import teamRoutes from "./src/routes/teamRoutes.js";
import cors from 'cors';
import alumniRoutes from "./src/routes/aluminiRoutes.js";
import homeRoutes from "./src/routes/HomeRoutes.js";
// Load env variables
dotenv.config({ path: "./.env" });

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Routes
app.use("/api/team", teamRoutes);
app.use("/api/alumni", alumniRoutes);
app.use("/api/home",homeRoutes);


// DB + Server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });


  import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname since you're using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use("/images", express.static(path.join(__dirname, "public/images")));
