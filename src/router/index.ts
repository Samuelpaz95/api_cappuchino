import { Express } from "express";

import { Module as departments } from "../modules/departments";
import { Module as notifications } from "../modules/notifications";

export default function (app: Express) {
	const dM = new departments(app);
	const nM = new notifications(app);
}
