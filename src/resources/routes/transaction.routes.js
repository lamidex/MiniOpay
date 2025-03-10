// write user routes logic here
import express from "express";
import { deposit, transfer, withdraw, getUserTransactions } from "../controllers/transaction.controller.js";
import { flutterwaveDeposit } from "../controllers/flutterwaveTransaction.js";
const router = express.Router();

router.post("/deposit", deposit);
router.post("/withdraw", withdraw);
router.post("/transfer", transfer);

// Get user transactions
router.get("/user/:userId", getUserTransactions);

// Flutterwave webhook route (no auth needed as it's called by Flutterwave)
router.post("/flutterwave-webhook", flutterwaveDeposit);

export default router;