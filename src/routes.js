import { Router } from "express";

import HelloController from "./controllers/HelloController";

const routes = new Router()

routes.get('/hello', HelloController.index) //essa rota vai responder a açcao index desse controller


export default routes;