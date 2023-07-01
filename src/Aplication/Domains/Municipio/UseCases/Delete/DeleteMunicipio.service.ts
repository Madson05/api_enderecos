import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import { refactorResult } from "../../Utils/RefactorResult";

class DeleteMunicipioService{
  constructor(private readonly municipioRepository: MunicipioRepository) {}

  async execute(codigoMunicipio: number): Promise<void> {
    const municipio = await this.municipioRepository.checkExists(codigoMunicipio);
    if (municipio !== true) {
      throw new Error('Municipio não encontrado');
    }

    const resultSet = await this.municipioRepository.delete(codigoMunicipio);

    return refactorResult(resultSet);
  }
}

export default DeleteMunicipioService;