import dotenv from "dotenv";
import express from 'express'; // Import crypto for handling signatures
import cors from 'cors';

import connectDB from "./config/db.js";
import driverRoutes from "./routes/driverRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/drivers", driverRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

// Database connection

app.listen(port, () => console.log(`Server running on port: ${port}`));