import { GetUFType } from "../../Aplication/Domains/UF/UseCases/Get/schemas/getUF.schema";
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

  async get(query: GetUFType){
    let connection;
    try{
      connection = await getConnection();
      const sql = `SELECT * FROM TB_UF WHERE ${query}`;
      const result = await connection.execute(sql);
      await connection.commit();
      return result;
    }catch(error){
      throw new Error("Não foi possivel buscar a(s) UF(s)");
    }finally{
      if(connection){
        await connection.close();
      }
    }
  }
}

export default UFRepository;
