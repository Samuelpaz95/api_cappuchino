import controller from "./controller";
import { Router } from "express";

const router = Router();
const breakPoint = "/departments";

router.get(`${breakPoint}/:department`, controller.getDepartmentCarrers);
router.get(`${breakPoint}/:department/:carrer`, controller.getDepartmentCarrer);

export { router };
