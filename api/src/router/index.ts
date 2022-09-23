import { Router } from "express";
import User from "./User.router";
import Auth from "./Auth.router";
import Register from "./Register.router";

const router = Router();

// Meddleware
router.use("/user", User);
router.use("/auth", Auth);
router.use("/register", Register);

export default router;
