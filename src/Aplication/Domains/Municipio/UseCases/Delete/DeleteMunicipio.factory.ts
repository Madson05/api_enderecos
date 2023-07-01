import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import DeleteMunicipioService from "./DeleteMunicipio.service";
import DeleteMunicipioController from "./DeleteMunicipio.controller";

const municipioRepository = new MunicipioRepository();
export const deleteMunicipioController = new DeleteMunicipioController(new DeleteMunicipioService(municipioRepository));