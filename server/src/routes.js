import { Router } from 'express';
import UsersController from './controllers/usersController.js';

const usersController = new UsersController();

const routes = Router();

routes.get('/',usersController.index);

export default routes;