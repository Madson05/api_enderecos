import MunicipioRepository from "../../../Infra/repositories/Municipio.repository";
import { GetMunicipioType } from "../Municipio/UseCases/Get/Schemas/GetMunicipio.schema";

type GetMunicipioServiceType = GetMunicipioType & {
  [key: string]: number | string | undefined;
}

class GetMunicipioService {
  constructor(private readonly municipioRepository: MunicipioRepository) {}

  async execute(data: GetMunicipioServiceType): Promise<any> {
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
    return result;

    

  }

  
}

export default GetMunicipioService;
