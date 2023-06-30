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
}

export default BairroRepository;