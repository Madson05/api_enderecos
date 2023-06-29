import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import GetBairroService from "./GetBairro.service";
import GetBairroController from "./GetBairro.controller";

const bairroRepository = new BairroRepository();
export const getBairroController = new GetBairroController(new GetBairroService(bairroRepository))