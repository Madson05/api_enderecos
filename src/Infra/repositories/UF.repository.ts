import UFEntity from "../../Aplication/Entities/UFEntity";
import getConnection from "../database/connectionDB";

class UFRepository {
    async create(UF: UFEntity) {
        const connection = await getConnection();
        const sql = `INSERT INTO UF (codigoUF, nome, sigla, status) VALUES (:codigoUF, :nome, :sigla, :status)`;
        const result = connection.execute(sql, {
            codigoUF: UF.getCodigoUF(),
            nome: UF.getNome(),
            sigla: UF.getSigla(),
            status: UF.getStatus()
          });
        return result;
    }
}