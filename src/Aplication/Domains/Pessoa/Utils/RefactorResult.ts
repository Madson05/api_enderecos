
import { GetPessoaType } from "../UseCases/Get/Schemas/GetPessoa.schema";
import PessoaEntity from "../../../Entities/PessoaEntity";

export const refactorResult = (result: any, data?: GetPessoaType) => {
  
  if (result && result.length > 0) {
    if (data) {
      const dataPessoa = result[0] as unknown[];
      const pessoa = new PessoaEntity(Number(dataPessoa[0]), String(dataPessoa[1]), String(dataPessoa[2]), Number(dataPessoa[3]), String(dataPessoa[4]), String(dataPessoa[5]), Number(dataPessoa[6]));
      return {...pessoa, enderecos: []};
    } else {
      for (const item in result) {
        const dataPessoa = result[item] as unknown[];
        const pessoa = new PessoaEntity(Number(dataPessoa[0]), String(dataPessoa[1]), String(dataPessoa[2]), Number(dataPessoa[3]), String(dataPessoa[4]), String(dataPessoa[5]), Number(dataPessoa[6]));
        result[item] = {...pessoa, enderecos: []};
      }
    }
    return result;
  }

}