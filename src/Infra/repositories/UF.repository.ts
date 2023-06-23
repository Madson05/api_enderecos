import UFEntity from "../../Aplication/Entities/UFEntity";
import getConnection from "../database/connectionDB";

class UFRepository {
    async create(UF: UFEntity) {
        const connection = await getConnection();
        const sql = `INSERT INTO UF (id, name,) VALUES (:id, :nome, :sigla, :status)`;
        const result = await connection.execute(sql, UF);
        return result;
    }
}