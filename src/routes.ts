import { Router } from "express";
import { SubjectController } from "./controllers/SubjectControllers";
import { RoomController } from "./controllers/RoomController";

const routes = Router();

routes.post("/subject", new SubjectController().create);

//room
routes.post("/room", new RoomController().create);

export default routes;
