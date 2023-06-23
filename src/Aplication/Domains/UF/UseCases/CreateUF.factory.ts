import UFRepository from "../../../../Infra/repositories/UF.repository";
import CreateUFController from "./CreateUF.controller";
import CreateUFService from "./CreateUF.service";

const uFRepository = new UFRepository();
const createUFService = new CreateUFService(uFRepository);

export const createUFController = new CreateUFController(createUFService);

