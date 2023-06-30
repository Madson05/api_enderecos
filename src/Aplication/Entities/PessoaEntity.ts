class PessoaEntity{
  constructor(
    private codigoPessoa: number,
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private login: string,
    private senha: string,
    private status: number
  ){
    this.codigoPessoa = codigoPessoa;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.login = login;
    this.senha = senha;
    this.status = status;
  }

  public getCodigoPessoa(): number{
    return this.codigoPessoa;
  }

  public getNome(): string{
    return this.nome;
  }

  public getSobrenome(): string{
    return this.sobrenome;
  }

  public getIdade(): number{
    return this.idade;
  }

  public getLogin(): string{
    return this.login;
  }

  public getSenha(): string{
    return this.senha;
  }

  public getStatus(): number{
    return this.status;
  }

  public setNome(nome: string): void{
    this.nome = nome;
  }

  public setSobrenome(sobrenome: string): void{
    this.sobrenome = sobrenome;
  }

  public setIdade(idade: number): void{
    this.idade = idade;
  }

  public setLogin(login: string): void{
    this.login = login;
  }

  public setSenha(senha: string): void{
    this.senha = senha;
  }

  public setStatus(status: number): void{
    this.status = status;
  }
}

export default PessoaEntity;