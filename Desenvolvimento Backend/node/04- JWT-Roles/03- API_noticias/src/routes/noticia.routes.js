import { Router } from "express";
import * as controller from '../controllers/noticia.controller.js'
import { autenticar } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/', autenticar, controller.buscar);

export default router