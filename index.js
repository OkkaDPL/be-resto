import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/index.js";
import db from "./config/db.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: `http://localhost:5173` }));
app.use(cookieParser());
dotenv.config();

app.use(route);

try {
  db.sync();
} catch (error) {}

app.listen(5000, () => {
  console.log(`http://localhost:5000`);
});
