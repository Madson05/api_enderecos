import { UpdateUFType } from "../../Aplication/Domains/UF/UseCases/Update/schemas/UpdateUF.shema";
import UFEntity from "../../Aplication/Entities/UFEntity";
import getConnection from "../database/connectionDB";

class UFRepository {
  async create(UF: UFEntity) {
    let connection;
    try {
      connection = await getConnection();
      const sql = `INSERT INTO TB_UF (codigo_UF, sigla, nome, status) VALUES (:codigoUF, :sigla, :nome, :status)`;
      await connection.execute(sql, {
        codigoUF: UF.getCodigoUF(),
        sigla: UF.getSigla(),
        nome: UF.getNome(),
        status: UF.getStatus(),
      });
      await connection.commit();

      const result = await this.get("");
      return result;
    } catch (error) { 
      throw new Error("Não foi possivel criar a UF");
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  async get(query: string){
    let connection;
    try{
      connection = await getConnection();
      if (query === "" || query === undefined){
        const result = await connection.execute(`SELECT * FROM TB_UF`);
        return result.rows;
      }
      
      const sql = `SELECT * FROM TB_UF WHERE ${query}`;
      const result = await connection.execute(sql);
      await connection.commit();
      return result.rows;
    
    }finally{
      if(connection){
        await connection.close();
      }
    }
  }

  async update(UF: UpdateUFType){
    let connection;
    try{
      connection = await getConnection();
      const sql = `UPDATE TB_UF SET sigla = :sigla, nome = :nome, status = :status WHERE codigo_UF = :codigoUF`;
      await connection.execute(sql, {
        codigoUF: UF.codigo_UF,
        sigla: UF.sigla,
        nome: UF.nome,
        status: UF.status,
      });
      await connection.commit();
      const result = await this.get("");
      return result;
    }catch(error){
      throw new Error("Não foi possivel atualizar a UF");
    }finally{
      if(connection){
        await connection.close();
      }
    }
  }

  async delete(codigoUF: number){
    let connection;
    try{
      connection = await getConnection();
      const sql = `DELETE FROM TB_ENDERECO WHERE CODIGO_BAIRRO IN(
        SELECT CODIGO_BAIRRO FROM TB_BAIRRO WHERE CODIGO_MUNICIPIO IN(
          SELECT CODIGO_MUNICIPIO FROM TB_MUNICIPIO WHERE CODIGO_UF = :codigoUF
        ))`;
      await connection.execute(sql, [codigoUF]);

      const sql2 = `DELETE FROM TB_BAIRRO WHERE CODIGO_MUNICIPIO IN(
        SELECT CODIGO_MUNICIPIO FROM TB_MUNICIPIO WHERE CODIGO_UF = :codigoUF
      )`;
      await connection.execute(sql2, [codigoUF]);

      const sql3 = `DELETE FROM TB_MUNICIPIO WHERE CODIGO_UF = :codigoUF`;
      await connection.execute(sql3, [codigoUF]);

      const sql4 = `DELETE FROM TB_UF WHERE CODIGO_UF = :codigoUF`;
      await connection.execute(sql4, [codigoUF]);

      await connection.commit();
      const result = await this.get("");
      return result;
    
    }finally{
      if(connection){
        await connection.close();
      }
    }
  }

  async checkExists(codigoUF: number){
    let connection;
    try{
      connection = await getConnection();
      const sql = `SELECT * FROM TB_UF WHERE CODIGO_UF = :codigoUF`;
      const result = await connection.execute(sql, [codigoUF]);

      if(result.rows && result.rows.length > 0){
        return true;
      }
    }catch(error){
      throw new Error("Não foi possivel verificar se a UF existe");
    }finally{
      if(connection){
        connection.close();
      }
    }
  }
}

export default UFRepository;
