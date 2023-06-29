import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import CreateBairroService from "./CreateBairro.service";
import CreateBairroController from "./CreateBairro.controller";

const bairroRepository = new BairroRepository();
export const createBairroController = new CreateBairroController(new CreateBairroService(bairroRepository)); 