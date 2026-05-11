import { Router } from "express";
import * as controller from '../controllers/student.controller.js';

const studentRoutes = Router();

studentRoutes.get('/', controller.getAllStudents);
studentRoutes.get('/filtrar', controller.filterStudents)

export default studentRoutes;