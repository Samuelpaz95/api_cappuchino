import { Express } from "express";

import { Module as departments } from "../modules/departments";
import { Module as professors } from "../modules/professors";
import { Module as news } from "../modules/news";
import { Module as shared } from "../modules/shared";

export default function (app: Express) {
	const dM = new departments(app);
	const pM = new professors(app);
	const sM = new shared(app);
	const nM = new news(app);
}
