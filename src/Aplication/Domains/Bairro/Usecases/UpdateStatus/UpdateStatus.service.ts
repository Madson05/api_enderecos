import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import { refactorResult } from "../../Util/RefactorResult";

class UpdateStatusService{
  constructor(private readonly repository: BairroRepository) {}

  async execute(codigoBairro: number) {
    const bairro = await this.repository.checkExists(codigoBairro);

    if (bairro === undefined || bairro === null) {
      throw new Error('Bairro não encontrado');
    }

    const status = await this.repository.checkStatus(codigoBairro);
    if(status === 2){
      throw new Error('Bairro já está inativo');
    }

    const resultSet = await this.repository.updateStatus(codigoBairro);
    return refactorResult(resultSet);
  }
}

export default UpdateStatusService;