import BairroRepository from "../../../../../Infra/repositories/Bairro.repository";
import BairroEntity from "../../../../Entities/BairroEntity";
import { refactorResult } from "../../Util/RefactorResult";
import { UpdateBairroSchema, UpdateBairroType } from "./Schemas/UpdateBairro.schema";

class UpdatebairroService{
  constructor(private readonly bairroRepository: BairroRepository) {}

  async execute(data: UpdateBairroType): Promise<any> {
    const bairro = new BairroEntity(data.codigoBairro, data.codigoMunicipio, data.nome, data.status)

    const resultSet = await this.bairroRepository.update(bairro);

    return refactorResult(resultSet);
  }
}