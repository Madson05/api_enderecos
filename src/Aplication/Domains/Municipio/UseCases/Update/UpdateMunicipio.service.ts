import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import MunicipioEntity from "../../../../Entities/MunicipioEntity";
import { refactorResult } from "../../Utils/RefactorResult";
import { UpdateMunicipioType } from "./schemas/UpdateMunicipio.schema";

class UpdateMunicipioService {
  constructor(private readonly municipioRepository: MunicipioRepository) {}

  async execute(data: UpdateMunicipioType): Promise<any> {

    const municipio = new MunicipioEntity(data.codigo_municipio, data.codigo_UF, data.nome, data.status)

    const resultSet = await this.municipioRepository.update(municipio);
    

    return refactorResult(resultSet);
  }
}

export default UpdateMunicipioService;
