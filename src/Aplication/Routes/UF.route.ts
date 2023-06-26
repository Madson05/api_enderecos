import { Router } from "express";
import { createUFController } from "../Domains/UF/UseCases/Create/CreateUF.factory";
import { getUFController } from "../Domains/UF/UseCases/Get/GetUF.factory";
import { updateUFController } from "../Domains/UF/UseCases/Update/UpdateUF.factory";

const routerUF = Router();

routerUF.get("/", getUFController.handle)
routerUF.post("/", createUFController.handle)
routerUF.put("/", updateUFController.handle)

export default routerUF;

