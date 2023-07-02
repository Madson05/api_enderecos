import BairroEntity from "../../Aplication/Entities/BairroEntity";
import getConnection from "../database/connectionDB";

class BairroRepository {
  async get(query: string) {
    let connection;
    try {
      connection = await getConnection();
      if (query === "" || query === undefined) {
        const result = await connection.execute(`SELECT * FROM TB_BAIRRO`);
        return result.rows;
      }

      const sql = `SELECT * FROM TB_BAIRRO WHERE ${query}`;
      const result = await connection.execute(sql);
      await connection.commit();
      return result.rows;
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  async create(bairro: BairroEntity) {
    let connection;
    try {
      connection = await getConnection();
      const sql = `INSERT INTO TB_BAIRRO (CODIGO_MUNICIPIO, CODIGO_BAIRRO, NOME, status) VALUES (:codigo_municipio, :codigo_bairro, :nome, :status)`;
      const result = await connection.execute(sql, [
        bairro.getCodigoMunicipio(),
        bairro.getCodigoBairro(),
        bairro.getNome(),
        bairro.getStatus(),
      ]);
      await connection.commit();
      return await this.get("");
    } catch (error) {
      console.log(error);
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  async update(bairro: BairroEntity) {
    let connection;
    try {
      connection = await getConnection();
      
      const sql = `UPDATE TB_BAIRRO SET CODIGO_MUNICIPIO = :codigo_municipio, NOME = :nome, status = :status WHERE CODIGO_BAIRRO = :codigo_bairro`;
      await connection.execute(sql, [
        bairro.getCodigoMunicipio(),
        bairro.getNome(),
        bairro.getStatus(),
        bairro.getCodigoBairro(),
      ]);
      await connection.commit();
      return await this.get("");
    } catch (error) {
      console.log(error);
    } finally {
      if (connection) {
        connection.close();
      }
    }
  }


  async delete(codigoBairro: number) {
    let connection;
    try {
      connection = await getConnection();
      // deletar enderecos
      const sql = `DELETE FROM TB_ENDERECO WHERE CODIGO_BAIRRO = :codigo_bairro`;
      await connection.execute(sql, [codigoBairro]);
      // deletar bairro
      const sql2 = `DELETE FROM TB_BAIRRO WHERE CODIGO_BAIRRO = :codigo_bairro`;
      await connection.execute(sql2, [codigoBairro]);
      await connection.commit();
      return await this.get("");

    }catch (error) {
      throw new Error("Não foi possivel excluir o bairro");
    } finally {
      if (connection) {
        connection.close();
      }
    }
  }

  async checkExists(codigoBairro: number) {
    let connection;
    try {
      connection = await getConnection();
      const sql = `SELECT * FROM TB_BAIRRO WHERE CODIGO_BAIRRO = :codigo_bairro`;
      const result = await connection.execute(sql, [codigoBairro]);
      if(result.rows && result.rows.length > 0){
        return true;
      }
    }
     finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  async updateStatus(codigoBairro: number ) {
    let connection;
    const status = 2;
    try {
      connection = await getConnection();
      const sqlEndereco = `DELETE FROM TB_ENDERECO WHERE CODIGO_BAIRRO = :codigo_bairro`;
      await connection.execute(sqlEndereco, [codigoBairro]);
      const sql = `UPDATE TB_BAIRRO SET status = :status WHERE CODIGO_BAIRRO = :codigo_bairro`;
      await connection.execute(sql, [status, codigoBairro]);
      await connection.commit();
      return await this.get("");
    } catch (error) {
      console.log(error);
    } finally {
      if (connection) {
        connection.close();
      }
    }
  }

  checkStatus = async (codigoBairro: number): Promise<number> =>{
    let connection;
    try {
      connection = await getConnection();
      const sql = `select status from TB_BAIRRO where codigo_bairro = :codigoBairro`;
      const resultSet = await connection.execute(sql, [codigoBairro]);
      if(resultSet.rows && resultSet.rows.length > 0){
        let result = resultSet.rows[0] as number[];
        return result[0];
      }
      return 1;
      
    }finally {
      if (connection) {
        await connection.close();
      }
    }
  };
}

export default BairroRepository;