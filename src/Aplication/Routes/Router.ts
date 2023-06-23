import {Request, Response, Router} from "express"
import routerUF from "./UF.route";

const router = Router();

router.use("/uf", routerUF)

export default router;