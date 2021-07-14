import { Application } from "express";

import { router as cappuchino } from "../modules/cappuchino/routes";

export default function (app: Application) {
	app.use(cappuchino);
}
