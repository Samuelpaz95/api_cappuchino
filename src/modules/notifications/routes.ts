import controller from "./controller";
import { Router } from "express";

const router = Router();
const breakPoint = "/notification";

router.get(`${breakPoint}/:department`, controller.show);

export { router };
