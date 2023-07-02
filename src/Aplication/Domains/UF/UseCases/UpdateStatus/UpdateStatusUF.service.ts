import UFRepository from "../../../../../Infra/repositories/UF.repository";
import { refactorResult } from "../../Utils/RefactorResult";

class UpdateStatusUFService {
  constructor(private readonly ufRepository: UFRepository) {}

  async execute(codigoUF: number) {
    const uf = await this.ufRepository.checkExists(codigoUF);

    if (!uf) {
      throw new Error("UF não encontrada");
    }

    const status = await this.ufRepository.checkStatus(codigoUF);

    if (status === 2) {
      throw new Error("UF já está inativa");
    }

    const resultSet = await this.ufRepository.UpdateStatus(codigoUF);
    return refactorResult(resultSet);
  }
}

export default UpdateStatusUFService;