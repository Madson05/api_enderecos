import UFRepository from "../../../../../Infra/repositories/UF.repository";
import UFEntity from "../../../../Entities/UFEntity";
import { GetUFType } from "../Get/schemas/getUF.schema";


class UpdateUFService{
  constructor(private ufRepository: UFRepository) {}

  execute = async (data: UFEntity): Promise<any> => {
    return this.ufRepository.update(data);
  }
}

export default UpdateUFService;