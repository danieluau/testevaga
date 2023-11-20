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

//routes.get('', RepositoriesController.index)
//routes.get('', RepositoriesController.show)
//routes.post('', RepositoriesController.create)
//routes.put('', RepositoriesController.update)
//routes.delete('', RepositoriesController.delete)

export default routes;