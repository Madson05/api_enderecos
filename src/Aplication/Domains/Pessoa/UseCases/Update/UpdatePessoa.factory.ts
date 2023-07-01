import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import UpdatePessoaService from "./UpdatePessoa.service";
import UpdatePessoaController from "./UpdatePessoa.controller";

const pessoaRepository = new PessoaRepository();
export const updatePessoaController = new UpdatePessoaController(new UpdatePessoaService(pessoaRepository));

