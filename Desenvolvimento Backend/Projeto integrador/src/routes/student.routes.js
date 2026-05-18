import { Router } from "express";
import * as controller from '../controllers/student.controller.js';

const studentRoutes = Router();

studentRoutes.get('/risco', controller.getAllStudents);
studentRoutes.get('/filtrar', controller.filterStudents)

export default studentRoutes;