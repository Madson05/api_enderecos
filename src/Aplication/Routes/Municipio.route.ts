import { Router } from "express";
import { getMunicipioController } from "../Domains/Municipio/UseCases/Get/GetMunicpio.factory";
import { createMunicipioController } from "../Domains/Municipio/UseCases/Create/CreateMunicipio.factory";
import router from "./Router";
import { updateMunicipioController } from "../Domains/Municipio/UseCases/Update/UpdateMunicipio.factory";

const routerMunicipio = Router();

routerMunicipio.get("/", getMunicipioController.handle);
routerMunicipio.post("/", createMunicipioController.handle);
routerMunicipio.put("/", updateMunicipioController.handle);

export default routerMunicipio;