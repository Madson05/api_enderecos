import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import BairroEntity from "../../../../Entities/BairroEntity";
import { refactorResult } from "../../Util/RefactorResult";
import { UpdateBairroSchema, UpdateBairroType } from "./Schemas/UpdateBairro.schema";

class UpdateBairroService{
  constructor(private readonly bairroRepository: BairroRepository) {}

  async execute(data: UpdateBairroType): Promise<any> {
    const bairro = new BairroEntity(data.codigoBairro, data.codigoMunicipio, data.nome, data.status)

    const checkExists = await this.bairroRepository.checkExists(data.codigoBairro);
    if(!checkExists) throw new Error("Bairro não encontrado");

    const checkExistsByNome = await this.bairroRepository.checkExistsByNome(data.nome, data.codigoMunicipio);
    if(checkExistsByNome) throw new Error("Já existe um bairro com esse nome");

    const checkMunicipio = await this.bairroRepository.checkIfMunicipioIsAtived(data.codigoMunicipio);
    if(!checkMunicipio) throw new Error("Municipio não encontrado ou inativo");

    const resultSet = await this.bairroRepository.update(bairro);

    return refactorResult(resultSet);
  }
}

export default UpdateBairroService;