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
      const sql = `SELECT * FROM TB_MUNICIPIO WHERE ${query}`;
      const result = await connection.execute(sql);
      await connection.commit();
      return result.rows;
    
    }catch(error){
      throw new Error("Não foi possivel buscar os municipios")
    }
    finally{
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
    
    }catch(error){
      throw new Error("Não foi possivel criar o municipio")
    }
    
    finally{
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
      await connection.execute(sql, [municipio.getCodigoUF(), municipio.getNome(), municipio.getStatus(), municipio.getCodigoMunicipio()]);
      await connection.commit();
      return await this.get("")
    
    }catch(error){
      throw new Error("Não foi possivel atualizar o municipio")
    }finally{
      if(connection){
        await connection.close();
      }
    }
  }

  async delete(codigoMunicipio: number){
    let connection;
    try{
      connection = await getConnection();
      const sql = `DELETE FROM TB_ENDERECO
       WHERE CODIGO_BAIRRO IN 
       (SELECT CODIGO_BAIRRO 
       FROM TB_BAIRRO
       WHERE CODIGO_MUNICIPIO = :codigo_municipio)`;
      await connection.execute(sql, [codigoMunicipio]);

      const sql2 = `DELETE FROM TB_BAIRRO WHERE CODIGO_MUNICIPIO = :codigo_municipio`;
      await connection.execute(sql2, [codigoMunicipio]);
      connection.commit();

      const sql3 = `DELETE FROM TB_MUNICIPIO WHERE CODIGO_MUNICIPIO = :codigo_municipio`;
      await connection.execute(sql3, [codigoMunicipio]);
      await connection.commit();
      return await this.get("")
    }
    catch(error){
      throw new Error("Não foi possivel deletar o municipio")
    }
    finally{
      if(connection){
        await connection.close();
      }
    }
  }

  async checkExists(codigoMunicipio: number){
    let connection;
    try{
      connection = await getConnection();
      const sql = `SELECT * FROM TB_MUNICIPIO WHERE CODIGO_MUNICIPIO = :codigo_municipio`;
      const result = await connection.execute(sql, [codigoMunicipio]);
      await connection.commit();
      if(result.rows && result.rows.length > 0){
        return true;
      }
      else{
        return false;
      }
    }
    catch(error){
      throw new Error("Não foi possivel buscar o municipio")
    }
    finally{
      if(connection){
        await connection.close();
      }
    }
  }

  async updateStatus(codigoMunicipio: number){
    let connection;
    const status = 2;
    try{
      connection = await getConnection();

      const sqlBairro = `UPDATE TB_BAIRRO SET STATUS = :status WHERE CODIGO_MUNICIPIO = :codigo_municipio`;
      await connection.execute(sqlBairro, [status, codigoMunicipio]);
      
      const sqlEndereco = `DELETE FROM TB_ENDERECO
      WHERE CODIGO_BAIRRO IN 
      (SELECT CODIGO_BAIRRO 
      FROM TB_BAIRRO
      WHERE CODIGO_MUNICIPIO = :codigo_municipio)`;
      await connection.execute(sqlEndereco, [codigoMunicipio]);

      const sql = `UPDATE TB_MUNICIPIO SET STATUS = :status WHERE CODIGO_MUNICIPIO = :codigo_municipio`;
      await connection.execute(sql, [status, codigoMunicipio]);
      await connection.commit();
      return await this.get("")
    }
    catch(error){
      throw new Error("Não foi possivel atualizar o status do municipio")
    }
    finally{
      if(connection){
        await connection.close();
      }
    }
  }

  async checkStatus(codigoMunicipio: number){
    let connection;
    try{
      connection = await getConnection();
      const sql = `SELECT STATUS FROM TB_MUNICIPIO WHERE CODIGO_MUNICIPIO = :codigo_municipio`;
      const result = await connection.execute(sql, [codigoMunicipio]);
      await connection.commit();
      if(result.rows && result.rows.length > 0){
        const status = result.rows[0] as number[];
        return status[0] as number;
      }
      else{
        return 0;
      }
    }
    catch(error){
      throw new Error("Não foi possivel verificar o status do municipio")
    }
    finally{
      if(connection){
        await connection.close();
      }
    }
  }

  async checkExistsByNome(nome: string, codigoUF: number){
    let connection;
    try{
      connection = await getConnection();
      const sql = `SELECT * FROM TB_MUNICIPIO WHERE UPPER(NOME) = UPPER(:nome) AND CODIGO_UF = :codigo_uf`;
      const result = await connection.execute(sql, [nome]);
      await connection.commit();
      if(result.rows && result.rows.length > 0){
        return true;
      }
      else{
        return false;
      }
    }
    catch(error){
      throw new Error("Não foi possivel buscar o municipio")
    }
    finally{
      if(connection){
        await connection.close();
      }
    }

  }
  
  async checkIfUfIsAtived(codigoUf: number){
    let connection;
    try{
      connection = await getConnection();
      const sql = `SELECT STATUS FROM TB_UF WHERE CODIGO_UF = :codigo_uf`;
      const result = await connection.execute(sql, [codigoUf]);
      await connection.commit();
      if(result.rows && result.rows.length > 0){
        const status = result.rows[0] as number[];
        return status[0] as number;
      }
      else{
        return 0;
      }
    }
    catch(error){
      throw new Error("Não foi possivel verificar o status da UF")
    }
    finally{
      if(connection){
        await connection.close();
      }
    }
  }
}

export default MunicipioRepository;