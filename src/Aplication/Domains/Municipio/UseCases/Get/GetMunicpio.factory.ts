import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import { GetMunicipioService } from "./GetMunicipio.service";
import GetMunicipioController from "./GetMunicipio.controller";

const municipioRepository = new MunicipioRepository();
export const getMunicipioController = new GetMunicipioController(new GetMunicipioService(municipioRepository))
