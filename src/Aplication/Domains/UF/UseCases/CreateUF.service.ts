import UFRepository from "../../../../Infra/repositories/UF.repository";
import UFEntity from "../../../Entities/UFEntity";
import { CreateUFType } from "./CreateUF.schema";

class CreateUFService {

    constructor(private uFRepository: UFRepository) { }

    async execute(UFDto: CreateUFType): Promise<any> {
        const UF = new UFEntity(1, UFDto.nome, UFDto.sigla, UFDto.status);

        return this.uFRepository.create(UF);
        
    }
}

export default CreateUFService;