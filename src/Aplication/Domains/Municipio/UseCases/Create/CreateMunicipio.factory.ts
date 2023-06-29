import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import CreateMunicipioService from "./CreateMunicipio.service";
import CreateMunicipioController from "./CreateMunicipio.controller";

const municipioRepository = new MunicipioRepository();
export const createMunicipioController = new CreateMunicipioController(new CreateMunicipioService(municipioRepository))