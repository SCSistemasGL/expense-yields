import { Request, Response } from "express";
import { authLogin } from "../services/Auth.service";

export const login = async (req: Request, res: Response) => {
  try {
    const isAuth = await authLogin(req.body)
    res.status(200).send(isAuth)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  }
};
