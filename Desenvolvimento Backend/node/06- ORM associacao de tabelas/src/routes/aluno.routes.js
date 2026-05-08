import { Router } from "express";
import * as controller from '../controllers/aluno.controller.js'

const alunoRoutes = Router();

alunoRoutes.get('/mediaBaixa', controller.listarMediaBaixa);
alunoRoutes.get('/filtrar', controller.filtrarAlunos);

export default alunoRoutes;