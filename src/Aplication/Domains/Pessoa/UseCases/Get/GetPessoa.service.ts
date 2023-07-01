import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import { refactorResult } from "../../Utils/RefactorResult";
import { GetPessoaType } from "./Schemas/GetPessoa.schema";

type GetPessoaServiceType = GetPessoaType & {
  [key: string]: number | string | undefined;
}

class GetPessoaService {
  constructor(private readonly pessoaRepository: PessoaRepository) {}

  async execute(data: GetPessoaServiceType): Promise<any> {
    let query = "";

    for (const item in data) {
      if (data.hasOwnProperty(item)) {
        if (item !== undefined) {
          if (query !== "") {
            query += " AND ";
          }
          query += `${item}='${data[item]}'`;
        }
      }
    }

    const result = await this.pessoaRepository.get(query);
    return refactorResult(result, data);

    

  }

  
}

export default GetPessoaService;
