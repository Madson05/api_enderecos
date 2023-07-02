import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import UpdateStatusService from "./UpdateStatus.service";
import UpdateStatusController from "./UpdateStatus.controller";

const bairroRepository = new BairroRepository();
export const updateStatusController = new UpdateStatusController(new UpdateStatusService(bairroRepository));