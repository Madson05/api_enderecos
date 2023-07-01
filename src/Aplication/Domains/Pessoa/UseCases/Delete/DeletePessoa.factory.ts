import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import DeletePessoaService from "./DeletePessoa.service";
import DeletePessoaController from "./DeletePessoa.controller";

const pessoaRepository = new PessoaRepository();
export const deletePessoaController = new DeletePessoaController(new DeletePessoaService(pessoaRepository));