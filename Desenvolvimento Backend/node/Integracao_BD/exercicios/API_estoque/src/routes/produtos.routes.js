import { Router } from "express";
import * as controller from '../controllers/produtos.controller.js'

const router = Router();

router.get('/', controller.buscarTodos);
router.get('/:id', controller.buscarPorId);
router.post('/', controller.criarProduto);
router.put('/:id', controller.atualizarProduto);

export default router