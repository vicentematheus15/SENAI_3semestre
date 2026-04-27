import { Router } from "express";
import * as controller from '../controllers/usuario.controller.js'

const authRoutes = Router();

authRoutes.post('/auth', controller.cadastrar);

export default authRoutes;