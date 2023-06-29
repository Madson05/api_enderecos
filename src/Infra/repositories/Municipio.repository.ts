import MunicipioEntity from "../../Aplication/Entities/MunicipioEntity";
import getConnection from "../database/connectionDB";

class MunicipioRepository{
  async get(query: string){
    let connection;
    try{
      connection = await getConnection();
      if (query === "" || query === undefined){
        const result = await connection.execute(`SELECT * FROM TB_MUNICIPIO`);
        return result.rows;
      }
      
      const sql = `SELECT * FROM TB_MUNCIPIO WHERE ${query}`;
      const result = await connection.execute(sql);
      await connection.commit();
      return result.rows;
    
    }finally{
      if(connection){
        await connection.close();
      }
    }
  }

  async create(municipio: MunicipioEntity){
    let connection;
    try{
      connection = await getConnection();
      const sql = `INSERT INTO TB_MUNICIPIO (CODIGO_UF, CODIGO_MUNICIPIO, NOME, status) VALUES (:codigo_uf, :codigo_municipio, :nome, :status)`;
      const result = await connection.execute(sql, [municipio.getCodigoUF(), municipio.getCodigoMunicipio(), municipio.getNome(), municipio.getStatus()]);
      await connection.commit();
      return await this.get("")
    
    }finally{
      if(connection){
        await connection.close();
      }
    }
  }

  async update(municipio: MunicipioEntity){
    let connection;
    try{
      connection = await getConnection();
      const sql = `UPDATE TB_MUNICIPIO SET CODIGO_UF = :codigo_uf, NOME = :nome, status = :status WHERE CODIGO_MUNICIPIO = :codigo_municipio`;
      const result = await connection.execute(sql, [municipio.getCodigoUF(), municipio.getNome(), municipio.getStatus(), municipio.getCodigoMunicipio()]);
      await connection.commit();
      return await this.get("")
    
    }finally{
      if(connection){
        await connection.close();
      }
    }
  }
}

export default MunicipioRepository;