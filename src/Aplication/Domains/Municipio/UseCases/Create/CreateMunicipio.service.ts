import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import MunicipioEntity from "../../../../Entities/MunicipioEntity";
import { refactorResult } from "../../Utils/RefactorResult";
import { CreateMunicipioType } from "./Schemas/CreateMunicipio.schema";

class CreateMunicipioService {
  constructor(private readonly municipioRepository: MunicipioRepository) {}

  async execute(data: CreateMunicipioType): Promise<any> {
    const municipio = new MunicipioEntity(data.codigo_municipio, data.codigo_UF, data.nome, data.status);
    const resultSet = await this.municipioRepository.create(municipio);

    return refactorResult(resultSet);
  }
}

export default CreateMunicipioService;