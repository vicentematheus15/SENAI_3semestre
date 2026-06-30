import { Router } from "express";
import * as controller from '../controllers/auth.controller.js';
import {limitadorCadastro, limitadorLogin} from '../config/rateLimit.js';
import cadastroValidador from "../middlewares/cadastro.validador.js";
import cadastroSchema from "../schemas/cadastro.schema.js";

const authRoutes = Router();

//rotas publicas
authRoutes.post('/cadastro', limitadorCadastro, cadastroValidador(cadastroSchema), controller.cadastrar);
authRoutes.post('/login', limitadorLogin, controller.login);

export default authRoutes;