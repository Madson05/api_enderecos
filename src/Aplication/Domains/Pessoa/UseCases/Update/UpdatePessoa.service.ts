import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import EnderecoEntity from "../../../../Entities/EnderecoEntity";
import PessoaEntity from "../../../../Entities/PessoaEntity";
import { refactorResult } from "../../Utils/RefactorResult";
import { UpdatePessoaType } from "./Schema/UpdatePessoa.schema";

class UpdatePessoaService {
  constructor(private pessoaRepository: PessoaRepository) {}

  async execute(data: UpdatePessoaType): Promise<any> {
    const codigoPessoa = data.codigoPessoa;
    const checkExists = await this.pessoaRepository.checkExistsByLogin(
      data.login
    );

    const dataPessoa = await this.pessoaRepository.get(`codigo_pessoa = '${codigoPessoa}'`);
    if (dataPessoa && dataPessoa.length === 0)
      throw new Error("Pessoa não encontrada");
    

    for (const endereco in data.enderecos) {
      const checkIfBairroExists =
        await this.pessoaRepository.checkIfBairroExists(
          data.enderecos[endereco].codigoBairro
        );
      if (checkIfBairroExists && checkIfBairroExists.length === 0)
        throw new Error("Bairro não encontrado");
      const checkBairro = await this.pessoaRepository.checkIfBairroIsAtived(
        data.enderecos[endereco].codigoBairro
      );
      if (checkBairro && checkBairro.length === 0)
        throw new Error("Bairro inativo");
      
    }
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
    const result = await this.pessoaRepository.update(pessoa, enderecos);
    return refactorResult(result);
  }
}

export default UpdatePessoaService;
