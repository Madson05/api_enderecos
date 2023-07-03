class MunicipioEntity{
  constructor(
    private codigoMunicipio: number,
    private codigoUF: number,
    private nome: string,
    private status: number
  ){
    this.codigoMunicipio = codigoMunicipio;
    this.codigoUF = codigoUF;
    this.nome = nome;
    this.status = status;
  }

  public getCodigoMunicipio(): number{
    return this.codigoMunicipio;
  }

  public getCodigoUF(): number{
    return this.codigoUF;
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

export default MunicipioEntity;