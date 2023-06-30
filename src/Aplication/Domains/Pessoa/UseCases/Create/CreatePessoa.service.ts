import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import getNextSequence from "../../../../../Infra/repositories/getNextSequence";
import EnderecoEntity from "../../../../Entities/EnderecoEntity";
import PessoaEntity from "../../../../Entities/PessoaEntity";
import { CreateUsuarioType, createUsuarioSchema } from "./Schemas/CreatePessoa.schema";

class CreatePessoaService{
    constructor(
        private readonly pessoaRepository: PessoaRepository
    ){}

    execute = async (data: CreateUsuarioType): Promise<any> => {
        // separar a data em duas entidades uma com o atributo endereço e outtra com o restante.
        const codigoPessoa = await getNextSequence("SEQUENCE_PESSOA");
        const codigoBairro = await getNextSequence("SEQUENCE_BAIRRO");
        const pessoa = new PessoaEntity(codigoPessoa, data.nome, data.sobrenome, data.idade, data.login, data.senha, data.status);
        const enderecos: EnderecoEntity[] = data.enderecos.map((endereco) => {
            return new EnderecoEntity(codigoBairro, codigoPessoa, endereco.codigoBairro, endereco.nomeRua, endereco.numero, endereco.complemento, endereco.cep)});
        const result = await this.pessoaRepository.create(pessoa, enderecos);
        return result;
    }
}