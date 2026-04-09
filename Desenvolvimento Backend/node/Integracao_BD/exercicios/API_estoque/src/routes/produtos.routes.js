import { Router } from "express";
import * as controller from '../controllers/produtos.controller.js'

const router = Router();

router.get('/', controller.buscarTodos);

export default router