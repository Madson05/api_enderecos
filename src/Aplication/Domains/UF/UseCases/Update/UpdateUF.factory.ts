import UpdateUFService from "./UpdateUF.service";
import UpdateUFController from "./UpdateUF.controller";
import UFRepository from "../../../../../Infra/repositories/UF.repository";

const uFRepository = new UFRepository();
export const updateUFController = new UpdateUFController(new UpdateUFService(uFRepository));