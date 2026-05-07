import { Router } from "express";
import * as controller from '../controller/aluno.controller.js'

const alunoRoutes = Router();

alunoRoutes.get('/mediaBaixa', controller.listarMediaBaixa)

export default alunoRoutes;