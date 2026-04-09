import { Router } from "express";
import * as controller from '../controllers/usuarios.controller.js'

const router = Router();

router.post('/register', controller.cadastrar);


export default router