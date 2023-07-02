import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import UpdateStatusService from "./UpdateStatus.service";
import UpdateStatusController from "./UpdateStatus.controller";

const pessoaRepository = new PessoaRepository();
export const updateStatusController = new UpdateStatusController(new UpdateStatusService(pessoaRepository));