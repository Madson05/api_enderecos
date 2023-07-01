import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import EnderecoEntity from "../../../../Entities/EnderecoEntity";
import PessoaEntity from "../../../../Entities/PessoaEntity";
import { UpdatePessoaType } from "./Schema/UpdatePessoa.schema";

class UpdatePessoaService {
  constructor(private pessoaRepository: PessoaRepository) {}

  async execute(data: UpdatePessoaType): Promise<any> {
    const codigoPessoa = data.codigoPessoa;
    const pessoa = new PessoaEntity(
      codigoPessoa,
      data.nome,
      data.sobrenome,
      data.idade,
      data.login,
      data.senha,
      data.status
    );
    const enderecos: EnderecoEntity[] = [];

    for (let item of data.enderecos) {
      const codigoEndereco = item.codigoEndereco;
      const endereco = new EnderecoEntity(
        codigoEndereco,
        codigoPessoa,
        item.codigoBairro,
        item.nomeRua,
        item.numero,
        item.complemento,
        item.cep
      );
      enderecos.push(endereco);
    }
    const result = await this.pessoaRepository.create(pessoa, enderecos);
    return result;
  }
}
