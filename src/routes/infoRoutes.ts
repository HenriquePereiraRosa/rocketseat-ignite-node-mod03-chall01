
import { Router } from "express";
import { HelloController } from "../modules/info/useCases/hello/helloController";
import { GetDiskSpaceController } from "../modules/info/useCases/getDiskSpace/getDiskSpaceController";

const infoRoutes = Router();

const helloController = new HelloController();
const getDiskSpaceController = new GetDiskSpaceController();

infoRoutes.get("/hello", helloController.handle);

infoRoutes.get("/disk-space", getDiskSpaceController.handle);

export { infoRoutes };