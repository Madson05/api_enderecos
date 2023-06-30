import { Router } from "express";
import { getPessoaController } from "../Domains/Pessoa/UseCases/Get/GetPessoa.factory";
import { createPessoaController } from "../Domains/Pessoa/UseCases/Create/CreatePessoa.factory";

const routerPessoa = Router();

routerPessoa.get("/", getPessoaController.handle);
routerPessoa.post("/", createPessoaController.handle);

export default routerPessoa;