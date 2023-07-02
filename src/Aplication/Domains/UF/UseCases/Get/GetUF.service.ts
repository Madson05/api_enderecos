import UFRepository from "../../../../../Infra/repositories/UF.repository";
import UFEntity from "../../../../Entities/UFEntity";
import { refactorResult } from "../../Utils/RefactorResult";
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
          query += `UPPER(${item})=UPPER('${data[item]}')`;
        }
      }
    }

    const result = await this.ufRepository.get(query);
    return refactorResult(result, data)

    

  }

  
}

export default GetUFService;
