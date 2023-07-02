import UFRepository from "../../../../../Infra/repositories/UF.repository";

class UpdateStatusUFService {
  constructor(private readonly ufRepository: UFRepository) {}

  async execute(codigoUF: number) {
    const uf = await this.ufRepository.checkExists(codigoUF);

    if (!uf) {
      throw new Error("UF não encontrada");
    }
    return await this.ufRepository.UpdateStatus(codigoUF);
  }
}

export default UpdateStatusUFService;