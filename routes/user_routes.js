import { Router } from "express";
import { signup } from "../controllers/user_controller.js";

export const userRouter = Router()

userRouter.post('/signup', signup)