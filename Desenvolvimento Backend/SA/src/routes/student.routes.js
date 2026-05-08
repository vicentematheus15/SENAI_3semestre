import { Router } from "express";
import * as controller from '../controllers/student.controller.js';

const studentRoutes = Router();

studentRoutes.get('/', controller.getAllStudents)

export default studentRoutes;