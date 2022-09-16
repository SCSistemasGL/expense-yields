import { Request, Response } from "express";
import {
  createNewRegisterUser,
  searchRegister,
} from "../services/Register.service";

export const createRegister = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newRegister = await createNewRegisterUser(req.body);
    res.status(200).send(newRegister);
  } catch (error: any) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  }
};

export const findRegister = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {email} = req.body
    const isRegister = await searchRegister(email);
    res.status(200).send(isRegister);
  } catch (error: any) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  }
};
