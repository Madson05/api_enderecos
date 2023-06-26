import oracledb from "oracledb";
import dbConfig from "./dbConfig";

let connection: oracledb.Connection;

export default async function getConnection() {

  connection = await oracledb.getConnection(dbConfig);

  return connection;
}
