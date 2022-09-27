import { Request, Response } from "express";
import { allPriceFuelProvince, loadNameProvince, newPriceFuelKm } from "../services/Supervisor.service";

export const createPriceFuel = async (req: Request, res: Response) => {
  try {
    const newPrice = await newPriceFuelKm(req.body);
    res.status(200).send(newPrice);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  }
};



export const loadProvince = async (req: Request, res: Response) => {
  try {
    const load = await loadNameProvince();
    res.status(200).send(load);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  }
};



export const allProvinceFuel = async (req: Request, res: Response) => {
  try {
    const allFuel = await allPriceFuelProvince();
    res.status(200).send(allFuel);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  }
};