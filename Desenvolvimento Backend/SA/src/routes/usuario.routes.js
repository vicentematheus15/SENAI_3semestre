import { Router } from "express";
import * as controller from '../controllers/usuario.controller.js';
import {autenticar} from '../middlewares/auth.middleware.js'

const usuarioRoutes = Router();

usuarioRoutes.get('/perfil', autenticar, controller.perfil);
usuarioRoutes.delete('/conta', autenticar, controller.desativarConta)

export default usuarioRoutes;