import { Router } from "express";
import { getPessoaController } from "../Domains/Pessoa/UseCases/Get/GetPessoa.factory";
import { createPessoaController } from "../Domains/Pessoa/UseCases/Create/CreatePessoa.factory";
import { updatePessoaController } from "../Domains/Pessoa/UseCases/Update/UpdatePessoa.factory";

const routerPessoa = Router();

routerPessoa.get("/", getPessoaController.handle);
routerPessoa.post("/", createPessoaController.handle);
routerPessoa.put("/", updatePessoaController.handle);

export default routerPessoa;