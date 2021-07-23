import { Express } from "express";

import { Module as departments } from "../modules/departments";
import { router as notifications } from "../modules/notifications/routes";

export default function (app: Express) {
	const dM = new departments(app);
	app.use(notifications);
}
