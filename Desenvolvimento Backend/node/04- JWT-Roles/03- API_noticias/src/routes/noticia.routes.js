import { Router } from "express";
import * as controller from '../controllers/noticia.controller.js'
import { autenticar, exigirAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/', autenticar, controller.buscar);
router.post('/', autenticar, exigirAdmin, controller.criar)

export default router