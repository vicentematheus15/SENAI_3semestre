import { Router } from "express";
import * as controller from '../controllers/auth.controller.js';
import {limitadorCadastro} from '../config/rateLimit.js';
import {limitadorLogin} from '../config/rateLimit.js';


const authRoutes = Router();

//rotas publicas
authRoutes.post('/cadastro', limitadorCadastro, controller.cadastrar);
authRoutes.post('/login', limitadorLogin, controller.login);

export default authRoutes;