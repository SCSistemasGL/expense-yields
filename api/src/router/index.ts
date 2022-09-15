import { Router } from "express";
import User from "./User.router";
import Auth from "./Auth.router";

const router = Router();

// Meddleware
router.use("/user", User);
router.use("/auth", Auth);

export default router;
