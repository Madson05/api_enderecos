import { Router } from "express";
import { getMunicipioController } from "../Domains/Municipio/UseCases/Get/GetMunicpio.factory";

const routerMunicipio = Router();

routerMunicipio.get("/", getMunicipioController.handle);

export default routerMunicipio;