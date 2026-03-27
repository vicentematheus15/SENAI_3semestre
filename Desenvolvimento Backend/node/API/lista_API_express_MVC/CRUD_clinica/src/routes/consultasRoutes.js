import { Router } from "express";
import * as consultasController from '../controllers/consultasController.js';

export const consultasRoutes = Router();

consultasRoutes.get('/', consultasController.listarConsultas);
// consultasRouter.post('/', consultasController.agendarConsulta);