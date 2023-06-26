import { Router } from "express";
import { createUFController } from "../Domains/UF/UseCases/Create/CreateUF.factory";
import { getUFController } from "../Domains/UF/UseCases/Get/GetUF.factory";

const routerUF = Router();

routerUF.get("/", getUFController.handle)
routerUF.post("/", createUFController.handle)

export default routerUF;

