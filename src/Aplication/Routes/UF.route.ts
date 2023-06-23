import { Router } from "express";
import CreateUFController from "../Domains/UF/UseCases/CreateUF.controller";
import { createUFController } from "../Domains/UF/UseCases/CreateUF.factory";

const routerUF = Router();

routerUF.post("/", createUFController.handle)

export default routerUF;

