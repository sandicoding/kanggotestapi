import express from "express";

const router = express.Router();
import { addOrderItems, getOrderItems } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";


router.route("/").get(protect, getOrderItems);
router.route("/create").post(protect, addOrderItems);

export default router;
