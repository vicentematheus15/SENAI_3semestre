import { Router } from "express";
import * as controller from '../controllers/user.controller.js'

const router = Router();

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById)
router.post('/create', controller.createUser);
router.put('/:id', controller.updateUser)
router.delete('/:id', controller.deleteUser)
// router.post('/login', controller.login);

export default router;
