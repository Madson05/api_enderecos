import { Router } from "express";
import { getBairroController } from "../Domains/Bairro/Usecases/Get/GetBairro.factory";
import { createBairroController } from "../Domains/Bairro/Usecases/Create/CreateBairro.factory";
import { updateBairroController } from "../Domains/Bairro/Usecases/Update/UpdateBairro.factory";

const routerBairro = Router();

routerBairro.get("/", getBairroController.handle);
routerBairro.post("/", createBairroController.handle);
routerBairro.put("/", updateBairroController.handle);

export default routerBairro;