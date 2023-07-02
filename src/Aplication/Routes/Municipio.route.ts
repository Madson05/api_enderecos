import { Router } from "express";
import { getMunicipioController } from "../Domains/Municipio/UseCases/Get/GetMunicpio.factory";
import { createMunicipioController } from "../Domains/Municipio/UseCases/Create/CreateMunicipio.factory";
import { updateMunicipioController } from "../Domains/Municipio/UseCases/Update/UpdateMunicipio.factory";
import { deleteMunicipioController } from "../Domains/Municipio/UseCases/Delete/DeleteMunicipio.factory";
import { updateStatusController } from "../Domains/Bairro/Usecases/UpdateStatus/UpdateStatus.factory";
import { updateStatusMunicipioController } from "../Domains/Municipio/UseCases/UpdateStatus/UpdateStatusMunicipio.factory";

const routerMunicipio = Router();

routerMunicipio.get("/", getMunicipioController.handle);
routerMunicipio.post("/", createMunicipioController.handle);
routerMunicipio.put("/", updateMunicipioController.handle);
routerMunicipio.patch("/:codigoMunicipio", updateStatusMunicipioController.handle);
routerMunicipio.delete("/:codigoMunicipio", deleteMunicipioController.handle);

export default routerMunicipio;