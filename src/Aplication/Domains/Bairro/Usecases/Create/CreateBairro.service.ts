import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import getNextSequence from "../../../../../Infra/repositories/getNextSequence";
import BairroEntity from "../../../../Entities/BairroEntity";
import { refactorResult } from "../../Util/RefactorResult";
import { CreateBairroType } from "./Schemas/CreateBairro.schema";

class CreateBairroService {
  constructor(private readonly bairroRepository: BairroRepository) {}

  async execute(data: CreateBairroType): Promise<any> {

    const checkExists = await this.bairroRepository.checkExistsByNome(data.nome, data.codigoMunicipio);
    if(checkExists) throw new Error("Bairro já cadastrado");
    const checkMunicipio = await this.bairroRepository.checkIfMunicipioIsAtived(data.codigoMunicipio);
    if(!checkMunicipio) throw new Error("Municipio não encontrado ou inativo");

    const bairro = new BairroEntity(await getNextSequence("SEQUENCE_BAIRRO"), data.codigoMunicipio, data.nome, data.status);

    const result = await this.bairroRepository.create(bairro);
    return refactorResult(result);
  }
}

export default CreateBairroService;