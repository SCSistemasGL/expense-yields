import { Request, Response } from "express";
import { findUser, notActiveUser, registerUser, updateUserEmail } from "../utils/User.utils";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const isUser = await findUser(+id);
    res.status(200).send(isUser);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send({error: error.message});
    }
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newUser = await registerUser(req.body);
    res.status(200).send(newUser);
  } catch (error: any) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send({error: error.message});
    }
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const isUpdateUser = await updateUserEmail(req.body);
    res.status(200).send(isUpdateUser);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send({error: error.message});
    }
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void>  => {
try{
  const isUser= await notActiveUser(+req.params.id)
  res.status(200).send(isUser)
}catch(error){
  if (error instanceof Error) {
    console.log(error.message);
    res.status(500).send({error: error.message});
  }
}
};
