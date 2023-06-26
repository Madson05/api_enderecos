import oracledb from 'oracledb';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig: oracledb.ConnectionAttributes = {
  user: `${process.env.DATABASE_APLICATION_USER}`,
  password: `${process.env.DATABASE_APLICATION_PASSWORD}`,
  connectString: `${process.env.DATABASE_APLICATION_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_APLICATION_SID}`

};

export default dbConfig;