import UFRepository from "../../../../../Infra/repositories/UF.repository";
import UpdateStatusUFService from "./UpdateStatusUF.service";
import UpdateStatusUFController from "./UpdateStatusUF.controller";

const ufRepository = new UFRepository();
export const updateStatusUFController = new UpdateStatusUFController(new UpdateStatusUFService(ufRepository));