import PessoaRepository from "../../../Infra/repositories/Pessoa.repository";
import GetPessoaController from "./GetPessoa.controller";
import GetPessoaService from "./GetPessoa.service";

const pessoaRepository = new PessoaRepository();
export const getPessoaController = new GetPessoaController(new GetPessoaService(pessoaRepository));