import 'reflect-metadata'
import { Router } from "express";
import { usersRoutes } from "./userRoutes";
import { infoRoutes } from './infoRoutes';

const router = Router();

router.use("/info", infoRoutes);
router.use("/users", usersRoutes);

export { router };