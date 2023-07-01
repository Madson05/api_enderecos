import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import { refactorResult } from "../../Utils/RefactorResult";

class DeletePessoaService {
  constructor(private readonly pessoaRepository: PessoaRepository) {}

  async execute(codigoPessoa: number): Promise<void> {
    const pessoa = await this.pessoaRepository.checkExists(codigoPessoa);
    
    if (!pessoa || pessoa === undefined || pessoa === null || pessoa.length === 0) {
      throw new Error('Pessoa não encontrada');
    }

    const resultSet = await this.pessoaRepository.delete(codigoPessoa);

    return refactorResult(resultSet);
  }
}

export default DeletePessoaService;