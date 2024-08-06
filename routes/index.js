import express from "express";
import register from "../controllers/registerController.js";
import { verifyRegister } from "../middleware/index.js";
const route = express.Router();

route.post("/register");

route.get("/", (req, res) => {
  res.send(process.env.key);
});

route.post("/register", verifyRegister, register);
export default route;
