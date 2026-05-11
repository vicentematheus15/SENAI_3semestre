import { Router } from "express";
import * as controller from '../controllers/class.controller.js';

const classRoutes = Router();

classRoutes.get('/', controller.filterClass);

export default classRoutes;