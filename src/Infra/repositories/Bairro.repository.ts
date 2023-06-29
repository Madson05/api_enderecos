import getConnection from "../database/connectionDB";

class BairroRepository{
  async get(query: string){
    let connection;
    try{
      connection = await getConnection();
      if (query === "" || query === undefined){
        const result = await connection.execute(`SELECT * FROM TB_BAIRRO`);
        return result.rows;
      }
      
      const sql = `SELECT * FROM TB_BAIRRO WHERE ${query}`;
      const result = await connection.execute(sql);
      await connection.commit();
      return result.rows;
    
    }finally{
      if(connection){
        await connection.close();
      }
    }
  }
}

export default BairroRepository;