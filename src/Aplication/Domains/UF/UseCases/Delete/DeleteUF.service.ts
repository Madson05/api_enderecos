import UFRepository from "../../../../../Infra/repositories/UF.repository";
import { refactorResult } from "../../Utils/RefactorResult";

class DeleteUFService{
  constructor(private uFRepository: UFRepository) {}
  async execute(codigoUF: number): Promise<void> {
    const UF = await this.uFRepository.checkExists(codigoUF);
    if (UF !== true) {
      throw new Error('UF não encontrada');
    }

    const resultSet = await this.uFRepository.delete(codigoUF);
    return refactorResult(resultSet);

  }
}

export default DeleteUFService;