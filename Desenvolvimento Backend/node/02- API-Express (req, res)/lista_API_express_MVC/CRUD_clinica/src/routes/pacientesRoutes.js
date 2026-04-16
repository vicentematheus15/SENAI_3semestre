import { Router } from "express";
import * as pacientesController from '../controllers/pacientesController.js';

export const pacientesRoutes = Router();

pacientesRoutes.get('/', pacientesController.listarPacientes);
pacientesRoutes.post('/', pacientesController.cadastrarPaciente);