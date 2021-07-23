import controller from "./controller";
import { Router } from "express";

const router = Router();
const breakPoint = "/notifications";

router.get(`${breakPoint}/:department`, controller.show);

export { router };
