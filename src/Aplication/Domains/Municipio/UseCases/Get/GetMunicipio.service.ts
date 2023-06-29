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
          query += `${item}='${data[item]}'`;
        }
      }
    }
    const result = await this.municipioRepository.get(query);
    // console.log(result)
    return refactorResult(result, data);
    
  }
}
