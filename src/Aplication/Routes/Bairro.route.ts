import { Router } from "express";
import { getBairroController } from "../Domains/Bairro/Usecases/Get/GetBairro.factory";
import { createBairroController } from "../Domains/Bairro/Usecases/Create/CreateBairro.factory";
import { updateBairroController } from "../Domains/Bairro/Usecases/Update/UpdateBairro.factory";
import { deleteBairroController } from "../Domains/Bairro/Usecases/Delete/DeleteBairro.factory";
import UpdateStatusController from "../Domains/Bairro/Usecases/UpdateStatus/UpdateStatus.controller";
import { updateStatusController } from "../Domains/Bairro/Usecases/UpdateStatus/UpdateStatus.factory";

const routerBairro = Router();

routerBairro.get("/", getBairroController.handle);
routerBairro.post("/", createBairroController.handle);
routerBairro.put("/", updateBairroController.handle);
routerBairro.patch("/:codigoBairro", updateStatusController.handle);
routerBairro.delete("/:codigoBairro", deleteBairroController.handle);

export default routerBairro;