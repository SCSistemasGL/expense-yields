import { AuthController } from "./Auth.controllers";
import { AccountControllers } from "./Account.controllers";
import { SupervisorController } from "./Supervisor.controller";

const controllers = [
  AuthController,
  AccountControllers,
  SupervisorController
];

export default controllers;
