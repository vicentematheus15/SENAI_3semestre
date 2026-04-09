import { Router } from "express";
import * as controller from '../controllers/usuarios.controller.js'

const router = Router();

router.post('/register', controller.cadastrar);
router.post('/login', controller.login);
router.put('/:id', controller.atualizar);

export default router