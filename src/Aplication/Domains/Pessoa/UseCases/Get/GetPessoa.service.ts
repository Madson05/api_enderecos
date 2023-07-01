import PessoaRepository from "../../../../../Infra/repositories/Pessoa.repository";
import { refactorResult } from "../../Utils/RefactorResult";
import { GetPessoaType } from "./Schemas/GetPessoa.schema";

type GetPessoaServiceType = GetPessoaType & {
  [key: string]: number | string | undefined;
};

class GetPessoaService {
  constructor(private readonly pessoaRepository: PessoaRepository) {}

  async execute(data: GetPessoaServiceType): Promise<any> {
    let query = "";

    for (const item in data) {
      if (data.hasOwnProperty(item)) {
        if (item !== undefined) {
          if (query !== "") {
            query += " AND ";
          }
          if(item === "codigoPessoa"){
            query += `${"codigo_pessoa"}=${data[item]}`;
          }else{
            query += `${item}='${data[item]}'`;
          }
        }
      }
    }

    
    const resultSet = await this.pessoaRepository.get(query);

    console.log(resultSet);

    if (data.codigoPessoa !== undefined || data.login !== undefined) {
      const pessoa = refactorResult(resultSet, data);
      const enderecos = await this.pessoaRepository.getEnderecos(
        Number(data.codigoPessoa)
      );

      if (enderecos && enderecos.length > 0) {
        for (const item in enderecos) {
          const dataEndereco = enderecos[item] as unknown[];
          const endereco = {
            codigoEndereco: Number(dataEndereco[0]),
            codigoPessoa: Number(dataEndereco[1]),
            codigoBairro: Number(dataEndereco[2]),
            nomeRua: String(dataEndereco[3]),
            numero: Number(dataEndereco[4]),
            complemento: String(dataEndereco[5]),
            cep: String(dataEndereco[6]),
            bairro: {},
          };

          pessoa.enderecos.push(endereco);
          
          const codigoBairro = pessoa.enderecos[item].codigoBairro;
          const bairro = await this.pessoaRepository.getBairro(codigoBairro);
    
          if (bairro && bairro.length > 0) {
            const dataBairro = bairro[0] as unknown[];
            pessoa.enderecos[item].bairro = {
              codigoBairro: Number(dataBairro[0]),
              codigoMunicipio: Number(dataBairro[1]),
              nomeBairro: String(dataBairro[2]),
              municipio: {},
            };
          }

          
    
          const codigoMunicipio = pessoa.enderecos[0].bairro.codigoMunicipio;
          const municipio = await this.pessoaRepository.getMunicipio(
            codigoMunicipio
          );
    
          if (municipio && municipio.length > 0) {
            const dataMunicipio = municipio[0] as unknown[];
            pessoa.enderecos[item].bairro.municipio = {
              codigoMunicipio: Number(dataMunicipio[0]),
              codigoUF: String(dataMunicipio[1]),
              uf: {},
            };
          }
    
          const codigoUF = pessoa.enderecos[0].bairro.municipio.codigoMunicipio;
          const uf = await this.pessoaRepository.getUF(codigoUF);
    
          if (uf && uf.length > 0) {
            const dataUF = uf[0] as unknown[];
            pessoa.enderecos[item].bairro.municipio.uf = {
              codigoUF: String(dataUF[0]),
              nomeUF: String(dataUF[1]),
              siglaUF: String(dataUF[2]),
            };
          }
        }

        
      }

      return pessoa;

      
    } else {
      const pessoas = refactorResult(resultSet);
      return pessoas;
    }
  }
}

export default GetPessoaService;
