import { Router } from "express";
import * as controller from '../controllers/class.controller.js';

const classRoutes = Router();

classRoutes.get('/filtrar', controller.filterClass);

export default classRoutes;