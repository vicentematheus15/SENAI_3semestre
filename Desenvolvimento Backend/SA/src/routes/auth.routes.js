import { Router } from "express";
import * as controller from '../controllers/auth.controller.js'

const authRoutes = Router();

authRoutes.post('/cadastro', controller.cadastrar);

export default authRoutes;