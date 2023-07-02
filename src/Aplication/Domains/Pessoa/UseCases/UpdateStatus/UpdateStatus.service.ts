import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import { refactorResult } from "../../Utils/RefactorResult";

class UpdateStatusService {
  constructor(private readonly repository: PessoaRepository) {}

  async execute(codigoPessoa: number) {
    const pessoa = await this.repository.checkExists(codigoPessoa);

    if (pessoa === undefined || pessoa === null || pessoa.length === 0) {
      throw new Error('Pessoa não encontrada');
    }

    const status = await this.repository.checkStatus(codigoPessoa);
    if(status === 2){
      throw new Error('Pessoa já está inativa');
    }

    const resultSet = await this.repository.updateStatus(codigoPessoa);
    return refactorResult(resultSet);
  }
}

export default UpdateStatusService;