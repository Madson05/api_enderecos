import UFEntity from "../../../Entities/UFEntity";
import { CreateUFType } from "./CreateUF.schema";

class CreateUFService {
    async execute(UF: CreateUFType): Promise<UFEntity> {
        const newUF = new UFEntity(1, UF.nome, UF.sigla, UF.status);

        return newUF;
    }
}

export default new CreateUFService();