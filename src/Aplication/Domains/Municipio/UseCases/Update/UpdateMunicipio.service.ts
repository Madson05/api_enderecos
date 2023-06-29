import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import { refactorResult } from "../../Utils/RefactorResult";

class UpdateMunicipioService {
  constructor(private readonly municipioRepository: MunicipioRepository) {}

  async execute(data: any): Promise<any> {
    const resultSet = await this.municipioRepository.update(data);

    return refactorResult(resultSet);
  }
}

export default UpdateMunicipioService;
