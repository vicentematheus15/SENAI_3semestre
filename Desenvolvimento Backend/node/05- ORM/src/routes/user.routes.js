import { Router } from "express";
import * as controller from '../controllers/user.controller.js'
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);
router.post('/create', controller.createUser);

router.post('/login', controller.login);
router.put('/:id', authenticate, controller.updateUser);
router.delete('/:id', authenticate, controller.deleteUser);

export default router;
