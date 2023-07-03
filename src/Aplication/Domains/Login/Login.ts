import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import GetPessoaService from "../Pessoa/UseCases/Get/GetPessoa.service";
import { GetPessoaSchema } from "../Pessoa/UseCases/Get/Schemas/GetPessoa.schema";
import PessoaRepository from "../../../Infra/repositories/Pessoa.repository";

class Login {
  constructor(private service: GetPessoaService) {}

  execute = async (request: Request, response: Response): Promise<any> => {
    const { senha } = request.body;
    const pessoa = GetPessoaSchema.parse(request.body);
    const result = await this.service.execute(pessoa);

    if (!result) {
      return response.status(404).send({ message: "Usuário não encontrado" });
    }

    if(result && result.length === 0){
      return response.status(404).send({ message: "Usuário não encontrado" });
    }

    

    if (result[0].senha !== senha) {
      return response.status(401).send({ message: "Senha inválida" });
    }

    const senhaValida = result[0].senha === senha;


    if (!senhaValida) {
      return response.status(401).send({ message: "Senha inválida" });
    }

    if(senhaValida){
      const token = jwt.sign(
        { codigoPessoa: result[0].codigoPessoa },
        process.env.SECRET as string,
        {
          expiresIn: "1h",
        }
      );

      return response.status(200).send({ token });
    }

    
  }
}

export default new Login(new GetPessoaService(new PessoaRepository()));
