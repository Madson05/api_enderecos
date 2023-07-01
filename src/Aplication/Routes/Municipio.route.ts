import { Router } from "express";
import { getMunicipioController } from "../Domains/Municipio/UseCases/Get/GetMunicpio.factory";
import { createMunicipioController } from "../Domains/Municipio/UseCases/Create/CreateMunicipio.factory";
import { updateMunicipioController } from "../Domains/Municipio/UseCases/Update/UpdateMunicipio.factory";
import { deleteMunicipioController } from "../Domains/Municipio/UseCases/Delete/DeleteMunicipio.factory";

const routerMunicipio = Router();

routerMunicipio.get("/", getMunicipioController.handle);
routerMunicipio.post("/", createMunicipioController.handle);
routerMunicipio.put("/", updateMunicipioController.handle);
routerMunicipio.delete("/:codigoMunicipio", deleteMunicipioController.handle);

export default routerMunicipio;