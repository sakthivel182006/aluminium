import express from "express";
import {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  sendOTP,
  verifyOTP,
  getallUser
} from "../controller/usercontroler.js";

const router = express.Router();

router.post("/", createUser); // Route for creating a new user
router.post("/login", loginUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/getall", getallUser);
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);

export default router;
