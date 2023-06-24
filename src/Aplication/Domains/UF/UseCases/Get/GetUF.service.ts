import UFRepository from "../../../../../Infra/repositories/UF.repository";

class GetUFFactory {
  constructor(private readonly ufRepository: UFRepository) {}

  async execute(query: string): Promise<any> {
    return this.ufRepository.get(query);
  }
}

export default GetUFFactory;
