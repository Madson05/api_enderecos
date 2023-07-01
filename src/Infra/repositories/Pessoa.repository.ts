import EnderecoEntity from "../../Aplication/Entities/EnderecoEntity";
import PessoaEntity from "../../Aplication/Entities/PessoaEntity";
import getConnection from "../database/connectionDB";

class PessoaRepository {

  public checkExists = async (codigoPessoa: number) => {
    let connection;
    try {
      connection = await getConnection();
      const sql = `SELECT * FROM TB_PESSOA WHERE CODIGO_PESSOA = :codigo_pessoa`;
      const result = await connection.execute(sql, [codigoPessoa]);
      return result.rows;
    }catch(error){
      if(connection){
        await connection.rollback();
      }
      throw new Error("Não foi possivel verificar se a pessoa existe");
    }
     finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  public async get(query: string) {
    let connection;
    try {
      connection = await getConnection();
      if (query === "" || query === undefined) {
        const sql = `SELECT * FROM TB_PESSOA`;
        const result = await connection.execute(sql);

        return result.rows;
      }else{
        console.log(query)
        const sql = `SELECT * FROM TB_PESSOA WHERE ${query}`;
        const result = await connection.execute(sql);
        console.log(query)
        return result.rows;
      }
    } finally {
      if (connection) {
        connection.close();
      }
    }
  }

  public async getEnderecos(codigoPessoa: number) {
    let connection;
    try {
      connection = await getConnection();
      const sql = `SELECT * FROM TB_ENDERECO WHERE CODIGO_PESSOA = :codigo_pessoa`;
      const result = await connection.execute(sql, [codigoPessoa]);
      return result.rows;
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  public async getBairro(codigoBairro: number) {
    let connection;
    try {
      connection = await getConnection();
      const sql = `SELECT * FROM TB_BAIRRO WHERE CODIGO_BAIRRO = :codigo_bairro`;
      const result = await connection.execute(sql, [codigoBairro]);
      return result.rows;
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  public async getMunicipio(codigoMunicipio: number) {
    let connection;
    try {
      connection = await getConnection();
      const sql = `SELECT * FROM TB_MUNICIPIO WHERE CODIGO_MUNICIPIO = :codigo_municipio`;
      const result = await connection.execute(sql, [codigoMunicipio]);
      return result.rows;
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  public async getUF(codigoUF: number) {
    let connection;
    try {
      connection = await getConnection();
      const sql = `SELECT * FROM TB_UF WHERE CODIGO_UF = :codigo_uf`;
      const result = await connection.execute(sql, [codigoUF]);
      return result.rows;
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  public async create(pessoa: PessoaEntity, enderecos: EnderecoEntity[]) {
    let connection;
    try {
      connection = await getConnection();
      console.log(pessoa);
      const sqlPessoa = `INSERT INTO TB_PESSOA (CODIGO_PESSOA, NOME, SOBRENOME, IDADE, LOGIN, SENHA, STATUS) VALUES (:codigo_pessoa, :nome, :sobrenome, :idade, :login, :senha, :status)`;
      console.log(sqlPessoa);
      await connection.execute(sqlPessoa, [
        pessoa.getCodigoPessoa(),
        pessoa.getNome(),
        pessoa.getSobrenome(),
        pessoa.getIdade(),
        pessoa.getLogin(),
        pessoa.getSenha(),
        pessoa.getStatus(),
      ]);

      for (let endereco of enderecos) {
        console.log(endereco);
        const sqlEndereco = `INSERT INTO TB_ENDERECO (CODIGO_ENDERECO, CODIGO_PESSOA, CODIGO_BAIRRO, NOME_RUA, NUMERO, COMPLEMENTO, CEP) VALUES (:codigo_endereco, :codigo_pessoa, :codigo_bairro, :nome_rua, :numero, :complemento, :cep)`;
        const result = await connection.execute(sqlEndereco, {
          codigo_endereco: endereco.getCodigoEndereco(),
          codigo_pessoa: endereco.getCodigoPessoa(),
          codigo_bairro: endereco.getCodigoBairro(),
          nome_rua: endereco.getNomeRua(),
          numero: endereco.getNumero(),
          complemento: endereco.getComplemento(),
          cep: endereco.getCep(),
        });
      }

      await connection.commit();
      return await this.get("");
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  public async update(pessoa: PessoaEntity, enderecos: EnderecoEntity[]) {
    let connection;
    try {
      connection = await getConnection();
      const sqlPessoa = `UPDATE TB_PESSOA SET NOME = :nome, SOBRENOME = :sobrenome, IDADE = :idade, LOGIN = :login, SENHA = :senha, STATUS = :status WHERE CODIGO_PESSOA = :codigo_pessoa`;
      await connection.execute(sqlPessoa, [
        pessoa.getNome(),
        pessoa.getSobrenome(),
        pessoa.getIdade(),
        pessoa.getLogin(),
        pessoa.getSenha(),
        pessoa.getStatus(),
        pessoa.getCodigoPessoa(),
      ]);

      for (let endereco of enderecos) {
        // verificar se o endereço existe, se existir altera, se não existir cria um novo.

        const sqlBusca = `SELECT * FROM TB_ENDERECO WHERE CODIGO_ENDERECO = :codigo_endereco`;
        const result = await connection.execute(sqlBusca, [
          endereco.getCodigoEndereco(),
        ]);
        if (result.rows !== undefined && result.rows.length === 0) {
          const sqlEndereco = `INSERT INTO TB_ENDERECO (CODIGO_ENDERECO, CODIGO_PESSOA, CODIGO_BAIRRO, NOME_RUA, NUMERO, COMPLEMENTO, CEP) VALUES (:codigo_endereco, :codigo_pessoa, :codigo_bairro, :nome_rua, :numero, :complemento, :cep)`;
          await connection.execute(sqlEndereco, {
            codigo_endereco: endereco.getCodigoEndereco(),
            codigo_pessoa: endereco.getCodigoPessoa(),
            codigo_bairro: endereco.getCodigoBairro(),
            nome_rua: endereco.getNomeRua(),
            numero: endereco.getNumero(),
            complemento: endereco.getComplemento(),
            cep: endereco.getCep(),
          });
          continue;
        }

        const sqlEndereco = `UPDATE TB_ENDERECO SET CODIGO_BAIRRO = :codigo_bairro, NOME_RUA = :nome_rua, NUMERO = :numero, COMPLEMENTO = :complemento, CEP = :cep WHERE CODIGO_ENDERECO = :codigo_endereco`;
        await connection.execute(sqlEndereco, [
          endereco.getCodigoBairro(),
          endereco.getNomeRua(),
          endereco.getNumero(),
          endereco.getComplemento(),
          endereco.getCep(),
          endereco.getCodigoEndereco(),
        ]);
      }

      await connection.commit();
      return await this.get("");
    } catch (error) {
      throw new Error("Não foi possivel atualizar a pessoa");
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  public async delete(codigoPessoa: number) {
    let connection;
    try {
      connection = await getConnection();

      const sqlEndereco = `DELETE FROM TB_ENDERECO WHERE CODIGO_PESSOA = :codigo_pessoa`;
      await connection.execute(sqlEndereco, [codigoPessoa]);

      const sql = `DELETE FROM TB_PESSOA WHERE CODIGO_PESSOA = :codigo_pessoa`;
      await connection.execute(sql, [codigoPessoa]);
      await connection.commit();
      return await this.get("");
    }catch(error){
      if(connection){
        await connection.rollback();
      }
      throw new Error("Não foi possivel deletar a pessoa");
    }finally {
      if (connection) {
        await connection.close();
      }
    }
  }
}

export default PessoaRepository;
