import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import CreatePessoaController from "./CreatePessoa.controller";
import CreatePessoaService from "./CreatePessoa.service";

const pessoaRepository = new PessoaRepository();
export const createPessoaController = new CreatePessoaController(new CreatePessoaService(pessoaRepository));