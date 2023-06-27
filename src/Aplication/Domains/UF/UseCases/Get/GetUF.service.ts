import UFRepository from "../../../../../Infra/repositories/UF.repository";
import UFEntity from "../../../../Entities/UFEntity";
import { GetUFType } from "./schemas/getUF.schema";

type GetUFServiceType = GetUFType & {
  [key: string]: number | string | undefined;
}

class GetUFService {
  constructor(private readonly ufRepository: UFRepository) {}

  async execute(data: GetUFServiceType): Promise<any> {
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

    const result = await this.ufRepository.get(query);

    if (result && result.length > 0) {

      if(data.codigo_UF !== undefined || data.sigla !== undefined || data.nome !== undefined){
        const dataUF = result[0] as unknown[];
        const UF = new UFEntity(Number(dataUF[0]), String(dataUF[1]), String(dataUF[2]), Number(dataUF[3]));

        return UF;

      }else{
        for(const item in result){
          const dataUF = result[item] as unknown[];
          const UF = new UFEntity(Number(dataUF[0]), String(dataUF[1]), String(dataUF[2]), Number(dataUF[3]));
          result[item] = UF;
        }
      }

      return result;
    }


  }
}

export default GetUFService;
