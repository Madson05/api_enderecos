class MunicipioEntity{
  constructor(
    private codigo_Municipio: number,
    private codigo_UF: number,
    private nome: string,
    private status: number
  ){
    this.codigo_Municipio = codigo_Municipio;
    this.codigo_UF = codigo_UF;
    this.nome = nome;
    this.status = status;
  }

  public getCodigoMunicipio(): number{
    return this.codigo_Municipio;
  }

  public getCodigoUF(): number{
    return this.codigo_UF;
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