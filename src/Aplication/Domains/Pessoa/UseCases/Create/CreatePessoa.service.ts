import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import { CreateUsuarioType, createUsuarioSchema } from "./Schemas/CreatePessoa.schema";

class CreatePessoaService{
    constructor(
        private readonly pessoaRepository: PessoaRepository
    ){}

    async execute(data: CreateUsuarioType): Promise<Pessoa>{
        // separar a data em duas entidades uma com o atributo endereço e outtra com o restante.
        const {enderecos, ...pessoa} = data;
        const result = await this.pessoaRepository.(pessoa);
        return pessoa;
    }
}