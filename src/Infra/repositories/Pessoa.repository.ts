import EnderecoEntity from "../../Aplication/Entities/EnderecoEntity";
import PessoaEntity from "../../Aplication/Entities/PessoaEntity";
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

  public async create(pessoa: PessoaEntity, enderecos: EnderecoEntity[]) {
    let connection;
    try {
      connection = await getConnection();
      console.log(pessoa);
      const sqlPessoa = `INSERT INTO TB_PESSOA (CODIGO_PESSOA, NOME, SOBRENOME, IDADE, LOGIN, SENHA, STATUS) VALUES (:codigo_pessoa, :nome, :sobrenome, :idade, :login, :senha, :status)`;
      console.log(sqlPessoa);
      await connection.execute(sqlPessoa, [
        pessoa.getCodigoPessoa(),
        pessoa.getNome(),
        pessoa.getSobrenome(),
        pessoa.getIdade(),
        pessoa.getLogin(),
        pessoa.getSenha(),
        pessoa.getStatus(),
      ]);

      for (let endereco of enderecos) {
        console.log(endereco);
        const sqlEndereco = `INSERT INTO TB_ENDERECO (CODIGO_ENDERECO, CODIGO_PESSOA, CODIGO_BAIRRO, NOME_RUA, NUMERO, COMPLEMENTO, CEP) VALUES (:codigo_endereco, :codigo_pessoa, :codigo_bairro, :nome_rua, :numero, :complemento, :cep)`;
        const result = await connection.execute(sqlEndereco, {
          codigo_endereco: endereco.getCodigoEndereco(),
          codigo_pessoa: endereco.getCodigoPessoa(),
          codigo_bairro: endereco.getCodigoBairro(),
          nome_rua: endereco.getNomeRua(),
          numero: endereco.getNumero(),
          complemento: endereco.getComplemento(),
          cep: endereco.getCep(),
        });
      }

      await connection.commit();
      return await this.get("");
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  public async update(pessoa: PessoaEntity, enderecos: EnderecoEntity[]) {
    let connection;
    try {
      connection = await getConnection();
      const sqlPessoa = `UPDATE TB_PESSOA SET NOME = :nome, SOBRENOME = :sobrenome, IDADE = :idade, LOGIN = :login, SENHA = :senha, STATUS = :status WHERE CODIGO_PESSOA = :codigo_pessoa`;
      await connection.execute(sqlPessoa, [
        pessoa.getNome(),
        pessoa.getSobrenome(),
        pessoa.getIdade(),
        pessoa.getLogin(),
        pessoa.getSenha(),
        pessoa.getStatus(),
        pessoa.getCodigoPessoa(),
      ]);

      for (let endereco of enderecos) {
        // verificar se o endereço existe, se existir altera, se não existir cria um novo.

        const sqlBusca = `SELECT * FROM TB_ENDERECO WHERE CODIGO_ENDERECO = :codigo_endereco`;
        const result = await connection.execute(sqlBusca, [
          endereco.getCodigoEndereco(),
        ]);
        if (result.rows !== undefined && result.rows.length === 0) {
          const sqlEndereco = `INSERT INTO TB_ENDERECO (CODIGO_ENDERECO, CODIGO_PESSOA, CODIGO_BAIRRO, NOME_RUA, NUMERO, COMPLEMENTO, CEP) VALUES (:codigo_endereco, :codigo_pessoa, :codigo_bairro, :nome_rua, :numero, :complemento, :cep)`;
          await connection.execute(sqlEndereco, {
            codigo_endereco: endereco.getCodigoEndereco(),
            codigo_pessoa: endereco.getCodigoPessoa(),
            codigo_bairro: endereco.getCodigoBairro(),
            nome_rua: endereco.getNomeRua(),
            numero: endereco.getNumero(),
            complemento: endereco.getComplemento(),
            cep: endereco.getCep(),
          });
          continue;
        }

        const sqlEndereco = `UPDATE TB_ENDERECO SET CODIGO_BAIRRO = :codigo_bairro, NOME_RUA = :nome_rua, NUMERO = :numero, COMPLEMENTO = :complemento, CEP = :cep WHERE CODIGO_ENDERECO = :codigo_endereco`;
        await connection.execute(sqlEndereco, [
          endereco.getCodigoBairro(),
          endereco.getNomeRua(),
          endereco.getNumero(),
          endereco.getComplemento(),
          endereco.getCep(),
          endereco.getCodigoEndereco(),
        ]);
      }

      await connection.commit();
      return await this.get("");
    } catch (error) {
      throw new Error("Não foi possivel atualizar a pessoa");
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }
}

export default PessoaRepository;
