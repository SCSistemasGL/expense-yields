import { Router } from "express";
import { login } from "../controllers/Auth.controllers";

const router = Router();

router.post("/login", login);

export default router;
