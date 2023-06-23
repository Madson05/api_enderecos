import oracledb from 'oracledb';

const dbConfig: oracledb.ConnectionAttributes = {
  user: 'C##NODE',
  password: 'node',
  connectString: 'localhost:1521/xe'
};

export default dbConfig;