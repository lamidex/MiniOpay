// write user routes logic here
import express from "express";
import { addPhoneNumber, addUserName, signIn, signUp, getProfile, updateProfile } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/signup", signUp);
router.post("/signIn", signIn);
router.put("/add/:_id", addPhoneNumber);
router.put("/addUsername/:_id", addUserName);

router.get("/profile/:id", getProfile);
router.put("/profile/:id", updateProfile);

export default router;