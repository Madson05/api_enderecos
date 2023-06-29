import {Request, Response, Router} from "express"
import routerUF from "./UF.route";
import routerMunicipio from "./Municipio.route";
import routerBairro from "./Bairro.route";

const router = Router();

router.use("/uf", routerUF)
router.use("/municipio", routerMunicipio)
router.use("/bairro", routerBairro)

export default router;