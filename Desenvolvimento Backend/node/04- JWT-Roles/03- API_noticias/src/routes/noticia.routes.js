import { Router } from "express";
import * as controller from '../controllers/noticia.controller.js'
import { autenticar, exigirAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/', autenticar, controller.buscar);
router.post('/', autenticar, exigirAdmin('admin'), controller.criar);
router.delete('/:id', autenticar, exigirAdmin('admin'), controller.remover)

export default router