import { Router } from 'express';
import * as controller from '../controllers/usuario.controller.js';

const router = Router();

router.post('/cadastrar', controller.cadastrar);
router.post('/login', controller.login);


export default router