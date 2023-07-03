import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import MunicipioEntity from "../../../../Entities/MunicipioEntity";
import { refactorResult } from "../../Utils/RefactorResult";
import { UpdateMunicipioType } from "./schemas/UpdateMunicipio.schema";

class UpdateMunicipioService {
  constructor(private readonly municipioRepository: MunicipioRepository) {}

  async execute(data: UpdateMunicipioType): Promise<any> {

    const municipio = new MunicipioEntity(data.codigoMunicipio, data.codigoUF, data.nome, data.status)

    const checkExists = await this.municipioRepository.checkExists(data.codigoMunicipio);
    if(!checkExists) throw new Error("Municipio não encontrado");

    const checkExistsByNome = await this.municipioRepository.checkExistsByNome(data.nome, data.codigoUF);
    if(checkExistsByNome) throw new Error("Já existe um municipio com esse nome");

    const checkUF = await this.municipioRepository.checkIfUfIsAtived(data.codigoUF);
    if(!checkUF) throw new Error("UF não encontrada ou inativa");



    const resultSet = await this.municipioRepository.update(municipio);
    

    return refactorResult(resultSet);
  }
}

export default UpdateMunicipioService;
