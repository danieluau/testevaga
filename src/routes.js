import { Router } from "express";
import auth from "./middlewares/auth";
import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";
import RepositoriesController from "./controllers/RepositoriesController";
import SessionsController from "./controllers/SessionsController";


const routes = new Router()


routes.post('/sessions', SessionsController.create)
routes.get('/hello', HelloController.index) //essa rota vai responder a açcao index desse controller
// controller publicos

// controles privados 

//middlewares
//routes.use(auth)
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