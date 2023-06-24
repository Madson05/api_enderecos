import GetUFService from "./GetUF.service";
import GetUFController from "./GetUF.controller";
import UFRepository from "../../../../../Infra/repositories/UF.repository";

const uFRepository = new UFRepository();

export const getUFController = new GetUFController(new GetUFService(uFRepository));