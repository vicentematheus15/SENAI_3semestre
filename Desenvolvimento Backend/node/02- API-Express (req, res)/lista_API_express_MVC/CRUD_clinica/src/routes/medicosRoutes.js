import { Router } from "express";
import * as medicosController from '../controllers/medicosController.js'

export const medicosRoutes = Router();

medicosRoutes.get('/', medicosController.listarMedicos);