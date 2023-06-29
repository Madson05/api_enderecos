import {Request, Response, Router} from "express"
import routerUF from "./UF.route";
import routerMunicipio from "./Municipio.route";

const router = Router();

router.use("/uf", routerUF)
router.use("/municipio", routerMunicipio)

export default router;