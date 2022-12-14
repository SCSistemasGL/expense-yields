import { Router } from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/User.controllers";

const router = Router();

router.get("/users/:id", getUsers);

router.get("/users/", getUsers);

router.post('/users', createUser)

router.put('/users', updateUser)

router.delete('/users/:id', deleteUser)

export default router;
