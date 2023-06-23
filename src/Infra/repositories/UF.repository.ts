import UFEntity from "../../Aplication/Entities/UFEntity";
import getConnection from "../database/connectionDB";

class UFRepository {
    async create(UF: UFEntity) {
        const connection = await getConnection();
        const sql = `INSERT INTO TB_UF (codigo_UF, sigla, nome, status) VALUES (:codigoUF, :sigla, :nome, :status)`;
        const result = connection.execute(sql, {
            codigoUF: UF.getCodigoUF(),
            sigla: UF.getSigla(),
            nome: UF.getNome(),
            status: UF.getStatus()
          });
        return result;
    }
}

export default UFRepository;