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
}
export default UFEntity;