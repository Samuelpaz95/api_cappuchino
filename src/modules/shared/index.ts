import { Express } from "express";

import Controller from "./controller";
import Service from "./service";
import Routes from "./routes";

export class Module {
	public routes: Routes;

	constructor(app: Express) {
		const service = new Service();
		const controller = new Controller(service);
		this.routes = new Routes(app, controller);
	}
}
