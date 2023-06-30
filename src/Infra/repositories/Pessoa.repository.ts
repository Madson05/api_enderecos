import getConnection from "../database/connectionDB";

class PessoaRepository {
  public async get(query: string) {
    let connection;
    try {
      connection = await getConnection();
      if (query === "" || query === undefined) {
        const sql = `
SELECT
    p.codigo_pessoa,
    p.nome,
    p.sobrenome,
    p.idade,
    p.login,
    p.senha,
    p.status,
    e.codigo_endereco,
    e.codigo_pessoa AS endereco_codigo_pessoa,
    e.codigo_bairro,
    e.nome_rua,
    e.numero,
    e.complemento,
    e.cep,
    b.codigo_bairro AS bairro_codigo_bairro,
    b.codigo_municipio,
    b.nome AS bairro_nome,
    b.status AS bairro_status,
    m.codigo_municipio AS municipio_codigo_municipio,
    m.codigo_UF AS municipio_codigo_UF,
    m.nome AS municipio_nome,
    m.status AS municipio_status,
    u.codigo_UF AS uf_codigo_UF,
    u.sigla AS uf_sigla,
    u.nome AS uf_nome,
    u.status AS uf_status
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
    p.status,
    e.codigo_endereco,
    e.codigo_pessoa,
    e.codigo_bairro,
    e.nome_rua,
    e.numero,
    e.complemento,
    e.cep,
    b.codigo_bairro,
    b.codigo_municipio,
    b.nome,
    b.status,
    m.codigo_municipio,
    m.codigo_UF,
    m.nome,
    m.status,
    u.codigo_UF,
    u.sigla,
    u.nome,
    u.status
`;

        const result = await connection.execute(sql);

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
