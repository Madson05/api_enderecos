class BairroEntity {
  constructor(
    private codigoBairro: number,
    private codigoMunicipio: number,
    private nome: string,
    private status: number
  ){
    this.codigoBairro = codigoBairro;
    this.codigoMunicipio = codigoMunicipio;
    this.nome = nome;
    this.status = status;
  }

  public getCodigoBairro(): number{
    return this.codigoBairro;
  }

  public getCodigoMunicipio(): number{
    return this.codigoMunicipio;
  }

  public getNome(): string{
    return this.nome;
  }

  public getStatus(): number{
    return this.status;
  }

  public setNome(nome: string): void{
    this.nome = nome;
  }

  public setStatus(status: number): void{
    this.status = status;
  }
}