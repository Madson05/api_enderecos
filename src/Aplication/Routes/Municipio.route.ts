import { Router } from "express";
import { getMunicipioController } from "../Domains/Municipio/UseCases/Get/GetMunicpio.factory";
import { createMunicipioController } from "../Domains/Municipio/UseCases/Create/CreateMunicipio.factory";

const routerMunicipio = Router();

routerMunicipio.get("/", getMunicipioController.handle);
routerMunicipio.post("/", createMunicipioController.handle);

export default routerMunicipio;