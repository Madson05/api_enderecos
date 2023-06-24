import UFRepository from "../../../../../Infra/repositories/UF.repository";
import CreateUFController from "./CreateUF.controller";
import CreateUFService from "./CreateUF.service";

const uFRepository = new UFRepository();

export const createUFController = new CreateUFController(new CreateUFService(uFRepository));

