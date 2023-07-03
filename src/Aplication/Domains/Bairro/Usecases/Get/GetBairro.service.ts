import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import { refactorResult } from "../../Util/RefactorResult";
import { GetBairroType } from "./Schema/GetBairro.schema";

type GetBairroTypeService = GetBairroType & {
  [key: string]: number | string | undefined;
}

class GetBairroService{
  constructor(private bairroRepository: BairroRepository) {}

  async execute(data: GetBairroTypeService): Promise<any> {
    let query = "";
    
    
    for (const item in data) {
      
      if (data.hasOwnProperty(item)) {
        console.log("pi")
        if (item !== undefined) {
          if (query !== "") {
            query += " AND ";
          }
          if(item === "codigoBairro"){
            query += `codigo_bairro='${data[item]}'`;
            continue;
          }
          if(item === "codigoMunicipio"){
            query += `codigo_municipio='${data[item]}'`;
            continue;
          }
          query += `UPPER(${item})=UPPER('${data[item]}')`;
        }
      }
    }

    const result = await this.bairroRepository.get(query);
    return refactorResult(result, data);


    
  }

}

export default GetBairroService;