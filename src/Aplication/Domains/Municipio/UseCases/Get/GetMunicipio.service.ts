import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";

export class GetMunicipioService {
  constructor(private readonly municipioRepository: MunicipioRepository) {}

  async execute(query: string) {
    const result = await this.municipioRepository.get(query);
    
  }
}
