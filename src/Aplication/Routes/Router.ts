import {Router} from "express"
import routerUF from "./UF.route";
import routerMunicipio from "./Municipio.route";
import routerBairro from "./Bairro.route";
import routerPessoa from "./Pessoa.route";

const router = Router();

router.use("/uf", routerUF)
router.use("/municipio", routerMunicipio)
router.use("/bairro", routerBairro)
router.use("/pessoa", routerPessoa)

export default router;