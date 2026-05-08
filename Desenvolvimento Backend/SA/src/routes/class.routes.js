import { Router } from "express";
import * as controller from '../controllers/user.controller.js';

const classRoutes = Router();

classRoutes.get('/perfil', controller.perfil);

export default classRoutes;