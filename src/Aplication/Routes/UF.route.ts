import { Router } from "express";
import { createUFController } from "../Domains/UF/UseCases/Create/CreateUF.factory";
import { getUFController } from "../Domains/UF/UseCases/Get/GetUF.factory";
import { updateUFController } from "../Domains/UF/UseCases/Update/UpdateUF.factory";
import { deleteUFController } from "../Domains/UF/UseCases/Delete/DeleteUF.factory";
import { updateStatusUFController } from "../Domains/UF/UseCases/UpdateStatus/UpdateStatusUF.factory";
import { authMiddleware } from "../Middlewares/authMiddleware";

const routerUF = Router();

routerUF.get("/", getUFController.handle)
routerUF.post("/", createUFController.handle)
routerUF.put("/",authMiddleware, updateUFController.handle)
routerUF.patch("/:codigoUF",authMiddleware, updateStatusUFController.handle)
routerUF.delete("/:codigoUF",authMiddleware, deleteUFController.handle)

export default routerUF;

