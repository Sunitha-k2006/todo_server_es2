import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./Db/db.js";
import todoRoutes from "./Routes/todoRoutes.js"; // 👈 CHECK THIS PATH

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

// ✅ THIS LINE IS MANDATORY
app.use("/csbs", todoRoutes);

// test route
app.get("/ping", (req, res) => {
  res.send("Server alive");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
