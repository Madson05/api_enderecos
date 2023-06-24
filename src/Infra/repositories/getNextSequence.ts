import oracledb from 'oracledb';
import dbConfig from '../database/dbConfig';

interface SequenceResult {
  NEXT_VALUE: number;
}

async function getNextSequence(sequenceName: string) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const sql = `SELECT ${sequenceName}.NEXTVAL AS NEXT_VALUE FROM DUAL`;
    const result = await connection.execute(sql);
    
    if (result.rows !== undefined) {
      const nextValue: number[] = result.rows[0] as number[];
      return nextValue[0];
    }

  } catch (error) {
    console.log(error);
    throw new Error("Não foi possivel gerar a sequence");

  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

getNextSequence("SEQUENCE_UF")

export default getNextSequence;
