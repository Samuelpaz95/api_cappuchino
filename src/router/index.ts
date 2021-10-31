import { Express } from "express";

import { Module as departments } from "../modules/departments";

export default function (app: Express) {
	const dM = new departments(app);
}
