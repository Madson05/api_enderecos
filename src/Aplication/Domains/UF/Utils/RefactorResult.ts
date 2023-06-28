import UFEntity from "../../../Entities/UFEntity";

export const refactorResult = (result: any, data?: UFEntity | undefined) => {
  if (result && result.length > 0) {

    if( data && (data.getCodigoUF !== undefined || data.getSigla !== undefined || data.getNome !== undefined)){
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
}