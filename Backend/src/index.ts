import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { swaggerSpec } from "./config/swagger";
import swaggerUi from "swagger-ui-express";
import userRoutes from "./routes/userRoutes";
import connectDB from "./config/db";


dotenv.config();
const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Your routes
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
