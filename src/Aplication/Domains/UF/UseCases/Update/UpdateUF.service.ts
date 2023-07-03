import UFRepository from "../../../../../Infra/repositories/UF.repository";
import UFEntity from "../../../../Entities/UFEntity";
import { refactorResult } from "../../Utils/RefactorResult";
import { GetUFType } from "../Get/schemas/getUF.schema";
import { UpdateUFType } from "./schemas/UpdateUF.shema";


class UpdateUFService{
  constructor(private ufRepository: UFRepository) {}

  execute = async (data: UpdateUFType): Promise<any> => {

    const checkExists = await this.ufRepository.checkExists(data.codigoUF);
    if(!checkExists) throw new Error("UF não encontrada")

    const checkExistsBySigla = await this.ufRepository.checkExistsBySigla(data.sigla);
    if(checkExistsBySigla) throw new Error("Já existe uma UF com essa sigla")

    const checkExistsByNome = await this.ufRepository.checkExistsByNome(data.nome);
    if(checkExistsByNome) throw new Error("Já existe uma UF com esse nome")

    const resultSet = await this.ufRepository.update(data);
    return refactorResult(resultSet)
  }
}

export default UpdateUFService;