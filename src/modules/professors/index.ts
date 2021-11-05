import { Express } from "express";

import Controller from "./controller";
import Model from "./model";
import Repository from "./repository";
import Routes from "./routes";

export class Module {
	public routes: Routes;

	constructor(app: Express) {
		const repository = new Repository();
		const model = new Model(repository);
		const controller = new Controller(model);
		this.routes = new Routes(app, controller);
	}
}
