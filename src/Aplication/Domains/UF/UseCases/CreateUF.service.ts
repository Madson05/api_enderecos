import UFEntity from "../../../Entities/UFEntity";
import { CreateUFType } from "./CreateUF.schema";

class CreateUFService {

    async execute(UFDto: CreateUFType): Promise<UFEntity> {
        const UF = new UFEntity(1, UFDto.nome, UFDto.sigla, UFDto.status);

        return UF;
    }
}

export default new CreateUFService();