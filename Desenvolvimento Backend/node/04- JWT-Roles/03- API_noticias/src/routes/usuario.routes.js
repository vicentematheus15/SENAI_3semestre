import { Router } from "express";
import * as controller from '../controllers/usuario.controller.js'

const router = Router();

router.post('/cadastro', controller.cadastro);
router.post('/login', controller.login);

export default router