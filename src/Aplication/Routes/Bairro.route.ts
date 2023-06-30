import { Router } from "express";
import { getBairroController } from "../Domains/Bairro/Usecases/Get/GetBairro.factory";
import { createBairroController } from "../Domains/Bairro/Usecases/Create/CreateBairro.factory";

const routerBairro = Router();

routerBairro.get("/", getBairroController.handle);
routerBairro.post("/", createBairroController.handle);

export default routerBairro;