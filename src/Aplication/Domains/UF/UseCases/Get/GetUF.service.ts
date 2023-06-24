import UFRepository from "../../../../../Infra/repositories/UF.repository";
import { GetUFType } from "./schemas/getUF.schema";

class GetUFFactory {
  constructor(private readonly ufRepository: UFRepository) {}

  async execute(query: GetUFType): Promise<any> {
    return this.ufRepository.get(query);
  }
}

export default GetUFFactory;
