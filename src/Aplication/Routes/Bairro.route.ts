import { Router } from "express";
import { getBairroController } from "../Domains/Bairro/Usecases/Get/GetBairro.factory";

const routerBairro = Router();

routerBairro.get("/", getBairroController.handle);

export default routerBairro;