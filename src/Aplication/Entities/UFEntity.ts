class UFEntity{
    constructor(
        private codigoUF: number,
        private sigla: string,
        private nome: string,
        private status: number
    ){
        this.codigoUF = codigoUF;
        this.nome = nome;
        this.sigla = sigla;
        this.status = status;
    }

    public getCodigoUF(): number{
        return this.codigoUF;
    }

    public getSigla(): string{
        return this.sigla;
    }

    public getNome(): string{
        return this.nome;
    }

    public getStatus(): number{
        return this.status;
    }

    public setSigla(sigla: string): void{
        this.sigla = sigla;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }

    public setStatus(status: number): void{
        this.status = status;
    }
}
export default UFEntity;