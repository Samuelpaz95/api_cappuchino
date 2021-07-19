import { Application } from "express";

import { router as departments } from "../modules/departments/routes";
import { router as notifications } from "../modules/notifications/routes";

export default function (app: Application) {
	app.use(departments);
	app.use(notifications);
}
