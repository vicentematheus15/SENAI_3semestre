import { Router } from "express";
import * as controller from '../controllers/user.controller.js'

const router = Router();

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById)
router.post('/create', controller.createUser);
// router.login('/login', controller.login);

export default router;
