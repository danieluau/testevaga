import { Router } from "express";

import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";
import RepositoriesController from "./controllers/RepositoriesController";


const routes = new Router()

routes.get('/hello', HelloController.index) //essa rota vai responder a açcao index desse controller


// REST
routes.get('/users', UsersController.index) //mosrta todos
routes.get('/users/:id', UsersController.show) // mostra um
routes.post('/users', UsersController.create) //criar
routes.put('/users/:id', UsersController.update) //atualizar
routes.delete('/users/:id', UsersController.delete) //deletar

routes.get('/users/:user_id/repositories', RepositoriesController.index)
routes.post('/users/:user_id/repositories', RepositoriesController.create)
routes.delete('/users/:user_id/repositories', RepositoriesController.delete)
export default routes;