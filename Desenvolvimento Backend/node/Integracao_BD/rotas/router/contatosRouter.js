import { Router } from "express";
import * as controller from '../controller/contatoController.js';

export const routerContatos = Router();

routerContatos.get('/', controller.listar);
routerContatos.get('/:id', controller.buscarPorID);
routerContatos.post('/', controller.criarContato);