import { Router } from "express";
import { getPessoaController } from "../Domains/Pessoa/UseCases/Get/GetPessoa.factory";
import { createPessoaController } from "../Domains/Pessoa/UseCases/Create/CreatePessoa.factory";
import { updatePessoaController } from "../Domains/Pessoa/UseCases/Update/UpdatePessoa.factory";
import { deletePessoaController } from "../Domains/Pessoa/UseCases/Delete/DeletePessoa.factory";

const routerPessoa = Router();

routerPessoa.get("/", getPessoaController.handle);
routerPessoa.post("/", createPessoaController.handle);
routerPessoa.put("/", updatePessoaController.handle);
routerPessoa.delete("/:codigoPessoa", deletePessoaController.handle);

export default routerPessoa;