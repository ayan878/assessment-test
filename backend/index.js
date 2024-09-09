import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


mongoose
  .connect(process.env.MONGODB_URI) 
  .then(() => {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
