import UFRepository from "../../../../../Infra/repositories/UF.repository";
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
    console.log(query);

    return this.ufRepository.get(query);
  }
}

export default GetUFService;
