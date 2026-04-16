import { Router } from "express";
import * as controller from '../controllers/usuario.controller.js'

const router = Router();

router.use('/cadastro', controller.cadastro);
router.use('/login', );

export default router