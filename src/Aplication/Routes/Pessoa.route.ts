import { Router } from "express";
import { getPessoaController } from "../Domains/Pessoa/GetPessoa.factory";

const routerPessoa = Router();

routerPessoa.get("/", getPessoaController.handle);

export default routerPessoa;