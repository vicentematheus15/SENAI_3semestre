import { Router } from 'express';
import * as controller from '../controllers/tarefa.controller.js';
import { autenticar } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', autenticar, controller.listar);
router.post('/',autenticar, controller.criar);
router.put('/:id/concluir', autenticar, controller.concluir);

export default router