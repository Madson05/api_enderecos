import UFRepository from "../../../../../Infra/repositories/UF.repository";
import DeleteUFService from "./DeleteUF.service";
import DeleteUFController from "./DeleteUF.controller";

const uFRepository = new UFRepository();
export const deleteUFController = new DeleteUFController(new DeleteUFService(uFRepository));