import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import UpdateBairroService from "./UpdateBairro.service";
import UpdatebairroController from "./UpdateBairroController";

const bairroRepository = new BairroRepository();
export const updateBairroController = new UpdatebairroController(new UpdateBairroService(bairroRepository));