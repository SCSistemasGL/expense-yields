import { Router } from "express";
import {
  allProvinceFuel,
  createPriceFuel,
  loadProvince,
} from "../controllers/Supervisor.controller";

const router = Router();

router.put("/updatePriceKm", createPriceFuel);

router.get("/loadNameProvince", loadProvince);

router.get("/allProvinceFuel", allProvinceFuel);

export default router;
