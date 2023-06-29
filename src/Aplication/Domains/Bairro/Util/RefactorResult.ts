import BairroEntity from "../../../Entities/BairroEntity";
import { GetBairroType } from "../Usecases/Get/Schema/GetBairro.schema";

export const refactorResult = (result: any, data?: GetBairroType | undefined) => {
  if (result && result.length > 0) {

    if( data && (data.codigo_bairro !== undefined)){
      const dataBairro = result[0] as unknown[];
      const Bairro = new BairroEntity(Number(dataBairro[0]), Number(dataBairro[1]), String(dataBairro[2]), Number(dataBairro[3]));
      return Bairro;

    }else{
      for(const item in result){
        const dataBairro = result[item] as unknown[];
        const Bairro = new BairroEntity(Number(dataBairro[0]), Number(dataBairro[1]), String(dataBairro[2]), Number(dataBairro[3]));
        result[item] = Bairro;
      }
    }
    return [];
  }
  return [];
}