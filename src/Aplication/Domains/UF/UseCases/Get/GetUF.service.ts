import UFRepository from "../../../../../Infra/repositories/UF.repository";
import { GetUFType } from "./schemas/getUF.schema";

class GetUFService {
  constructor(private readonly ufRepository: UFRepository) {}

  async execute(data: GetUFType): Promise<any> {

    return this.ufRepository.get(data);
  }
}

export default GetUFService;
