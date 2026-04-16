import { Router } from "express";
import * as controller from '../controllers/livros.controller.js'

export const router = Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscarLivro);
router.post('/', controller.criarLivro);

export default router