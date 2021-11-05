import { Express } from "express";

import Controller from "./controller";
import Service from "./service";
import Repository from "./repository";
import Routes from "./routes";

export class Module {
	public routes: Routes;

	constructor(app: Express) {
		const repository = new Repository();
		const service = new Service(repository);
		const controller = new Controller(service);
		this.routes = new Routes(app, controller);
	}
}
