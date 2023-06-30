import getConnection from "../database/connectionDB";

class PessoaRepository {
  public async get(query: string) {
    let connection;
    try {
      connection = await getConnection();
      if (query === "" || query === undefined) {
        const sql = `SELECT
        p.codigo_pessoa,
        p.nome,
        p.sobrenome,
        p.idade,
        p.login,
        p.senha,
        p.status,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'codigoEndereco' VALUE e.codigo_endereco,
                'codigoPessoa' VALUE e.codigo_pessoa,
                'codigoBairro' VALUE e.codigo_bairro,
                'nomeRua' VALUE e.nome_rua,
                'numero' VALUE e.numero,
                'complemento' VALUE e.complemento,
                'cep' VALUE e.cep,
                'bairro' VALUE JSON_OBJECT(
                    'codigoBairro' VALUE b.codigo_bairro,
                    'codigoMunicipio' VALUE b.codigo_municipio,
                    'nome' VALUE b.nome,
                    'status' VALUE b.status,
                    'municipio' VALUE JSON_OBJECT(
                        'codigoMunicipio' VALUE m.codigo_municipio,
                        'codigoUF' VALUE m.codigo_UF,
                        'nome' VALUE m.nome,
                        'status' VALUE m.status,
                        'uf' VALUE JSON_OBJECT(
                            'codigoUF' VALUE u.codigo_UF,
                            'sigla' VALUE u.sigla,
                            'nome' VALUE u.nome,
                            'status' VALUE u.status
                        )
                    )
                )
            )
        ) AS enderecos
    FROM
        tb_pessoa p
    LEFT JOIN
        tb_endereco e ON p.codigo_pessoa = e.codigo_pessoa
    LEFT JOIN
        tb_bairro b ON e.codigo_bairro = b.codigo_bairro
    LEFT JOIN
        tb_municipio m ON b.codigo_municipio = m.codigo_municipio
    LEFT JOIN
        tb_uf u ON m.codigo_UF = u.codigo_UF
    GROUP BY
        p.codigo_pessoa,
        p.nome,
        p.sobrenome,
        p.idade,
        p.login,
        p.senha,
        p.status;
    `;
        const result =
          await connection.execute(sql); 
        
        return result.rows;
      }
    } finally {
      if (connection) {
        connection.close();
      }
    }
  }
}

export default PessoaRepository;
