import { UpdateUFType } from "../../Aplication/Domains/UF/UseCases/Update/schemas/UpdateUF.shema";
import UFEntity from "../../Aplication/Entities/UFEntity";
import getConnection from "../database/connectionDB";

class UFRepository {
  async create(UF: UFEntity) {
    let connection;
    try {
      connection = await getConnection();
      const sql = `INSERT INTO TB_UF (codigo_UF, sigla, nome, status) VALUES (:codigoUF, :sigla, :nome, :status)`;
      const result = await connection.execute(sql, {
        codigoUF: UF.getCodigoUF(),
        sigla: UF.getSigla(),
        nome: UF.getNome(),
        status: UF.getStatus(),
      });
      await connection.commit();
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
      const result = await connection.execute(sql, {
        codigoUF: UF.codigo_UF,
        sigla: UF.sigla,
        nome: UF.nome,
        status: UF.status,
      });
      await connection.commit();
      return result;
    }catch(error){
      throw new Error("Não foi possivel atualizar a UF");
    }finally{
      if(connection){
        await connection.close();
      }
    }
  }
}

export default UFRepository;
