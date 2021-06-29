import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { gameRoutes } from "./gameRoutes";
import { infoRoutes } from './infoRoutes';

const router = Router();

router.use("/info", infoRoutes);
router.use("/users", userRoutes);
router.use("/games", gameRoutes);

export { router };