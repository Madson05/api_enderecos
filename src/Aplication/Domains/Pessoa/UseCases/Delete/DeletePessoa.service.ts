import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";

class DeletePessoaService {
  constructor(private readonly pessoaRepository: PessoaRepository) {}

  async execute(codigoPessoa: number): Promise<void> {
    const pessoa = await this.pessoaRepository.checkExists(codigoPessoa);

    if (!pessoa) {
      throw new Error('Pessoa not found');
    }
    
    await this.pessoaRepository.delete(codigoPessoa);
  }
}