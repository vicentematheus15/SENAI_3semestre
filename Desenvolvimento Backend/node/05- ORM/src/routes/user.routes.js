import { Router } from "express";
import * as controller from '../controllers/user.controller.js'

const router = Router();

router.get('/', controller.getAllUsers);
router.post('/create', controller.createUser);

export default router;
