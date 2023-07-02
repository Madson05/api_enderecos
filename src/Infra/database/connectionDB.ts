import oracledb from "oracledb";
import dbConfig from "./dbConfig";

let connection: oracledb.Connection;

export default async function getConnection() {

  try{
    connection = await oracledb.getConnection(dbConfig);

    return connection;
  }catch(error){
    throw new Error("Não foi possivel conectar ao banco de dados");
  }
}
