import controller from "./controller";
import { Router } from "express";

const router = Router();
const breakPoint = "/cappuchino";

router.get(`${breakPoint}/:id`, controller.show);
router.get(breakPoint, controller.get);

export { router };
