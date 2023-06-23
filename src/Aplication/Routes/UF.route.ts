import { Router } from "express";
import CreateUFController from "../Domains/UF/UseCases/CreateUF.controller";

const routerUF = Router();

routerUF.post("/", CreateUFController.handle)

export default routerUF;

