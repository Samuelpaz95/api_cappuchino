import controller from "./controller";
import { Router } from "express";

const router = Router();
const breakPoint = "/notification";

router.get(`${breakPoint}/:id`, controller.show);

export { router };
