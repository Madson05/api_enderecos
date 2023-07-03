
import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import getNextSequence from "../../../../../Infra/repositories/getNextSequence";
import EnderecoEntity from "../../../../Entities/EnderecoEntity";
import PessoaEntity from "../../../../Entities/PessoaEntity";
import { CreateUsuarioType } from "./Schemas/CreatePessoa.schema";
import { refactorResult } from "../../Utils/RefactorResult";

class CreatePessoaService{
    constructor(
        private readonly pessoaRepository: PessoaRepository
    ){}

    execute = async (data: CreateUsuarioType): Promise<any> => {

        const checkExists = await this.pessoaRepository.checkExistsByLogin(data.login);
        
        if(checkExists && checkExists.length > 0) throw new Error("Login já cadastrado");

        for (const endereco in data.enderecos){
            const checkIfBairroExists = await this.pessoaRepository.checkIfBairroExists(data.enderecos[endereco].codigoBairro);
            if(checkIfBairroExists && checkIfBairroExists.length === 0) throw new Error("Bairro não encontrado");
            const checkBairro = await this.pessoaRepository.checkIfBairroIsAtived(data.enderecos[endereco].codigoBairro);
            if(checkBairro && checkBairro.length === 0) throw new Error("Bairro inativo");
        }

        
        
        
        const codigoPessoa = await getNextSequence("SEQUENCE_PESSOA");
        const pessoa = new PessoaEntity(codigoPessoa, data.nome, data.sobrenome, data.idade, data.login, data.senha, data.status);
        const enderecos: EnderecoEntity[] = [];

        for (let item of data.enderecos){
            const codigoEndereco = await getNextSequence("SEQUENCE_ENDERECO");
            const endereco = new EnderecoEntity(codigoEndereco, codigoPessoa, item.codigoBairro, item.nomeRua, item.numero, item.complemento, item.cep);
            enderecos.push(endereco);
        }
        const result = await this.pessoaRepository.create(pessoa, enderecos);
        return refactorResult(result);
    }
}

export default CreatePessoaService;