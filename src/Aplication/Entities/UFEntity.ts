class UFEntity{
    constructor(
        private id: number,
        private nome: string,
        private sigla: string,
        private status: number
    ){
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
        this.status = status;
    }
}
export default UFEntity;