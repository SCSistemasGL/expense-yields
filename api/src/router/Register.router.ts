import { Router } from "express";
import { createRegister, findRegister } from "../controllers/Register.controllers";

const router = Router()

router.get("/search", findRegister)

router.post("/searchEmail", findRegister)

router.post('/create', createRegister)

export default router;