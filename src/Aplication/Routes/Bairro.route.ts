import { Router } from "express";
import { getBairroController } from "../Domains/Bairro/Usecases/Get/GetBairro.factory";
import { createBairroController } from "../Domains/Bairro/Usecases/Create/CreateBairro.factory";
import { updateBairroController } from "../Domains/Bairro/Usecases/Update/UpdateBairro.factory";
import { deleteBairroController } from "../Domains/Bairro/Usecases/Delete/DeleteBairro.factory";
import UpdateStatusController from "../Domains/Bairro/Usecases/UpdateStatus/UpdateStatus.controller";
import { updateStatusController } from "../Domains/Bairro/Usecases/UpdateStatus/UpdateStatus.factory";
import { authMiddleware } from "../Middlewares/authMiddleware";

const routerBairro = Router();

routerBairro.get("/", getBairroController.handle);
routerBairro.post("/", createBairroController.handle);
routerBairro.put("/",authMiddleware, updateBairroController.handle);
routerBairro.patch("/:codigoBairro",authMiddleware, updateStatusController.handle);
routerBairro.delete("/:codigoBairro",authMiddleware, deleteBairroController.handle);

export default routerBairro;