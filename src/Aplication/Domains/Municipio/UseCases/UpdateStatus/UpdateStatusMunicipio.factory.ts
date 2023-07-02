import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import UpdateStatusMunicipioService from "./UpdateStatusMunicipio.service";
import UpdateStatusMunicipioController from "./UpdateStatusMunicipio.controller";

const municipioRepository = new MunicipioRepository();
export const updateStatusMunicipioController = new UpdateStatusMunicipioController(new UpdateStatusMunicipioService(municipioRepository));