import { Router } from "express";
import * as controller from '../controllers/aluno.controller.js';

const turmaRoutes = Router();

turmaRoutes.get('/filtrar', controller.filtrarTurmas);

export default turmaRoutes;