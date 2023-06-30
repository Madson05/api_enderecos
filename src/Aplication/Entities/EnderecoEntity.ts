class EnderecoEntity{
  constructor(
    private codigoEndereco: number,
    private codigoPessoa: number,
    private codigoBairro: number,
    private nomeRua: string,
    private numero: string,
    private complemento: string | undefined,
    private cep: string,

  ){
    this.codigoEndereco = codigoEndereco;
    this.codigoPessoa = codigoPessoa;
    this.codigoBairro = codigoBairro;
    this.nomeRua = nomeRua;
    this.numero = numero;
    this.complemento = complemento;
    this.cep = cep;
  }

  public getCodigoEndereco(): number{
    return this.codigoEndereco;
  }

  public getCodigoPessoa(): number{
    return this.codigoPessoa;
  }

  public getCodigoBairro(): number{
    return this.codigoBairro;
  }

  public getNomeRua(): string{
    return this.nomeRua;
  }

  public getNumero(): string{
    return this.numero;
  }

  public getComplemento(): string | undefined{
    return this.complemento;
  }

  public getCep(): string{
    return this.cep;
  }

  public setNomeRua(nomeRua: string): void{
    this.nomeRua = nomeRua;
  }

  public setNumero(numero: string): void{
    this.numero = numero;
  }

  public setComplemento(complemento: string | undefined): void{
    this.complemento = complemento;
  }

  public setCep(cep: string): void{
    this.cep = cep;
  }
}

export default EnderecoEntity;