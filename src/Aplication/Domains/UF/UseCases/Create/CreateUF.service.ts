import UFRepository from "../../../../../Infra/repositories/UF.repository";
import getNextSequence from "../../../../../Infra/repositories/getNextSequence";
import UFEntity from "../../../../Entities/UFEntity";
import { refactorResult } from "../../Utils/RefactorResult";
import { CreateUFType } from "./Schemas/CreateUF.schema";

class CreateUFService {

    constructor(private uFRepository: UFRepository) { }

    async execute(UFDto: CreateUFType): Promise<any> {
        const UF = new UFEntity(await getNextSequence("SEQUENCE_UF"), UFDto.sigla, UFDto.nome, UFDto.status);

        
        const UFExistsBySigla = await this.uFRepository.checkExistsBySigla(UF.getSigla());
        const UFExistsByNome = await this.uFRepository.checkExistsByNome(UF.getNome());

        if (UFExistsBySigla || UFExistsByNome) {
            throw new Error("UF já cadastrada");
        }

        const result = await this.uFRepository.create(UF);
        return refactorResult(result);
        
    }
}

export default CreateUFService;