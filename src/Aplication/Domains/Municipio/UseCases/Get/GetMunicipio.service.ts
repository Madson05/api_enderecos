import MunicipioRepository from "../../../../../Infra/repositories/Municipio.repository";
import { refactorResult } from "../../Utils/RefactorResult";
import { GetMunicipioType } from "./Schemas/GetMunicipio.schema";


type GetMunicipioServiceType = GetMunicipioType & {
  [key: string]: number | string | undefined;
}

export class GetMunicipioService {
  constructor(private readonly municipioRepository: MunicipioRepository) {}

  async execute(data: GetMunicipioServiceType) {

    let query = "";

    for (const item in data) {
      if (data.hasOwnProperty(item)) {
        if (item !== undefined) {
          if (query !== "") {
            query += " AND ";
          }
          if(item === "codigoMunicipio"){
            query += `codigo_municipio='${data[item]}'`;
            continue;
          }
          if(item === "codigoUF"){
            query += `codigo_UF='${data[item]}'`;
            continue;
          }
          query += `UPPER(${item})=UPPER('${data[item]}')`;
        }
      }
    }
    const result = await this.municipioRepository.get(query);
    return refactorResult(result, data);
    
  }
}
