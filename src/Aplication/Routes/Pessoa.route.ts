import { Router } from "express";
import { getPessoaController } from "../Domains/Pessoa/UseCases/Get/GetPessoa.factory";
import { createPessoaController } from "../Domains/Pessoa/UseCases/Create/CreatePessoa.factory";
import { updatePessoaController } from "../Domains/Pessoa/UseCases/Update/UpdatePessoa.factory";
import { deletePessoaController } from "../Domains/Pessoa/UseCases/Delete/DeletePessoa.factory";
import { updateStatusController } from "../Domains/Pessoa/UseCases/UpdateStatus/UpdateStatus.factory";
import { authMiddleware } from "../Middlewares/authMiddleware";

const routerPessoa = Router();

routerPessoa.get("/",authMiddleware, getPessoaController.handle);
routerPessoa.post("/", createPessoaController.handle);
routerPessoa.put("/",authMiddleware, updatePessoaController.handle);
routerPessoa.patch("/:codigoPessoa",authMiddleware, updateStatusController.handle);
routerPessoa.delete("/:codigoPessoa",authMiddleware, authMiddleware, deletePessoaController.handle);


export default routerPessoa;