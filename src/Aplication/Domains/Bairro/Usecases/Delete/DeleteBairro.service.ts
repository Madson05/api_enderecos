import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import { refactorResult } from "../../Util/RefactorResult";

class DeleteBairroService{
  constructor(private readonly bairroRepository: BairroRepository) {}

  async execute(codigoBairro: number): Promise<void> {
    const bairro = await this.bairroRepository.checkExists(codigoBairro);
    if (bairro !== true) {
      throw new Error('Bairro não encontrado');
    }

    const resultSet = await this.bairroRepository.delete(codigoBairro);

    return refactorResult(resultSet);
  }
}

export default DeleteBairroService;