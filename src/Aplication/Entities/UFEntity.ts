class UFEntity{
    constructor(
        private codigo_UF: number,
        private sigla: string,
        private nome: string,
        private status: number
    ){
        this.codigo_UF = codigo_UF;
        this.sigla = sigla;
        this.nome = nome;
        this.status = status;
    }

    public getCodigoUF(): number{
        return this.codigo_UF;
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