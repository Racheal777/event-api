import { Router } from "express";
import { deleteEvent, getEvents, getOneEvent, postEvents } from "../controllers/event_controller.js";

export const eventRouter = Router()

eventRouter.get('/', getEvents)


eventRouter.post('/', postEvents)

eventRouter.get('/:id', getOneEvent)

eventRouter.delete('/:id', deleteEvent)