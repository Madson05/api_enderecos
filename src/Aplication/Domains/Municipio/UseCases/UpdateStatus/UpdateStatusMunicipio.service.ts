import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import { refactorResult } from "../../Utils/RefactorResult";

class UpdateStatusMunicipioService{
  constructor(private repository: MunicipioRepository) {}

  async execute(codigoMunicipio: number) {
    const municipio = await this.repository.checkExists(codigoMunicipio);
    if (municipio === undefined || municipio === null) {
      throw new Error('Municipio não encontrado');
    }

    const status = await this.repository.checkStatus(codigoMunicipio);
    if(status === 2){
      throw new Error('Municipio já está inativo');
    }

    const resultSet = await this.repository.updateStatus(codigoMunicipio);

    return refactorResult(resultSet);
  }
}

export default UpdateStatusMunicipioService;