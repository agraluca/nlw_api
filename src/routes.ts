import express, { response } from "express";
import db from "./database/connection";
import convertHourToMinutes from "./utils/convertHourToMinutes";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);
export default routes;
