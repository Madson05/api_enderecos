import UFRepository from "../../../../../Infra/repositories/UF.repository";
import UFEntity from "../../../../Entities/UFEntity";
import { refactorResult } from "../../Utils/RefactorResult";
import { GetUFType } from "../Get/schemas/getUF.schema";
import { UpdateUFType } from "./schemas/UpdateUF.shema";


class UpdateUFService{
  constructor(private ufRepository: UFRepository) {}

  execute = async (data: UpdateUFType): Promise<any> => {
    const resultSet = await this.ufRepository.update(data);
    return refactorResult(resultSet)
  }
}

export default UpdateUFService;