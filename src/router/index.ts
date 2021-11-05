import { Express } from "express";

import { Module as departments } from "../modules/departments";
import { Module as professors } from "../modules/professors";

export default function (app: Express) {
	const dM = new departments(app);
	const pM = new professors(app);
}
