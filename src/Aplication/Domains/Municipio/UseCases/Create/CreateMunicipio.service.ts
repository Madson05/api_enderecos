import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import getNextSequence from "../../../../../Infra/repositories/getNextSequence";
import MunicipioEntity from "../../../../Entities/MunicipioEntity";
import { refactorResult } from "../../Utils/RefactorResult";
import { CreateMunicipioType } from "./Schemas/CreateMunicipio.schema";

class CreateMunicipioService {
  constructor(private readonly municipioRepository: MunicipioRepository) {}

  async execute(data: CreateMunicipioType): Promise<any> {
    const checkExists = await this.municipioRepository.checkExistsByNome(data.nome, data.codigo_UF);
    if(checkExists) throw new Error("Municipio já cadastrado");
    const checkUF = await this.municipioRepository.checkIfUfIsAtived(data.codigo_UF);
    if(!checkUF) throw new Error("UF não encontrada ou inativa");

    const municipio = new MunicipioEntity(await getNextSequence("SEQUENCE_MUNICIPIO"), data.codigo_UF, data.nome, data.status);
    const resultSet = await this.municipioRepository.create(municipio);

    return refactorResult(resultSet);
  }
}

export default CreateMunicipioService;