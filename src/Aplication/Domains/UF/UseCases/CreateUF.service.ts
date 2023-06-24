import UFRepository from "../../../../Infra/repositories/UF.repository";
import getNextSequence from "../../../../Infra/repositories/getNextSequence";
import UFEntity from "../../../Entities/UFEntity";
import { CreateUFType } from "./CreateUF.schema";

class CreateUFService {

    constructor(private uFRepository: UFRepository) { }

    async execute(UFDto: CreateUFType): Promise<any> {
        const UF = new UFEntity(await getNextSequence("SEQUENCE_UF"), UFDto.sigla, UFDto.nome, UFDto.status);

        return this.uFRepository.create(UF);
        
    }
}

export default CreateUFService;