import MunicipioEntity from "../../../Entities/MunicipioEntity";
import { GetMunicipioType } from "../UseCases/Get/Schemas/GetMunicipio.schema";

export const refactorResult = (result: any, data?: GetMunicipioType | undefined) => {
  if (result && result.length > 0) {

    if( data && (data.codigo_municipio !== undefined || data.codigo_municipio !== undefined)){
      const dataMunicipio = result[0] as unknown[];
      const Municipio = new MunicipioEntity(Number(dataMunicipio[0]), Number(dataMunicipio[1]), String(dataMunicipio[2]), Number(dataMunicipio[3]));

      return Municipio;

    }else{
      for(const item in result){
        const dataMunicipio = result[item] as unknown[];
        const Municipio = new MunicipioEntity(Number(dataMunicipio[0]), Number(dataMunicipio[1]), String(dataMunicipio[2]), Number(dataMunicipio[3]));
        result[item] = Municipio;
      }
    }

    return result;
  }
  return result;
}