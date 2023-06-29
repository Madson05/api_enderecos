import UpdateMunicipioController from "./UpdateMunicipio.controller";
import UpdateMunicipioService from "./UpdateMunicipio.service";
import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";

const municipioRepository = new MunicipioRepository();

export const updateMunicipioController = new UpdateMunicipioController(new UpdateMunicipioService(municipioRepository));