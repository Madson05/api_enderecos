import UFEntity from "../../../Entities/UFEntity";
import { GetUFType } from "../UseCases/Get/schemas/getUF.schema";

export const refactorResult = (result: any, data?: GetUFType | undefined) => {
  if (result && result.length > 0) {

    if( data && (data.codigoUF !== undefined || data.sigla !== undefined || data.nome !== undefined)){
      const dataUF = result[0] as unknown[];
      const UF = new UFEntity(Number(dataUF[0]), String(dataUF[1]), String(dataUF[2]), Number(dataUF[3]));

      return UF;

    }else{
      for(const item in result){
        const dataUF = result[item] as unknown[];
        const UF = new UFEntity(Number(dataUF[0]), String(dataUF[1]), String(dataUF[2]), Number(dataUF[3]));
        result[item] = UF;
      }
    }

    return result;
  }
  return result;
}