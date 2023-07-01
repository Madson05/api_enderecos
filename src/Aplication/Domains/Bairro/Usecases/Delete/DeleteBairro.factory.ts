import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import DeleteBairroService from "./DeleteBairro.service";
import DeleteBairroController from "./DeleteBairro.controller";

const bairroRepository = new BairroRepository();
export const deleteBairroController = new DeleteBairroController(new DeleteBairroService(bairroRepository));