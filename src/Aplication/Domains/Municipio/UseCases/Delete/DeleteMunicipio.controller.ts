import { Request, Response } from "express";
import DeleteMunicipioService from "./DeleteMunicipio.service";

class DeleteMunicipioController{
    constructor(private readonly deleteMunicipioService: DeleteMunicipioService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { codigoMunicipio } = request.params;

        try {
            await this.deleteMunicipioService.execute(Number(codigoMunicipio));
            return response.status(204).send();
        } catch (error) {
            return response.status(400).json({
                message: 'Erro inesperado.'
            });
        }
    }

}

export default DeleteMunicipioController;