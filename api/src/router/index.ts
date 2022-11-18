import { Router } from "express";
import User from "./User.router";

import Register from "./Register.router";
import Auditor from "./Supervisor.router";

const router = Router();

// Meddleware
router.use("/user", User);

router.use("/register", Register);
router.use("/auditor", Auditor);

export default router;
