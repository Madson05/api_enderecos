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

    

  }

  
}

export default GetUFService;
