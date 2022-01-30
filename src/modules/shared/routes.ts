import { sharedController } from "./interfaces";
import { Express } from "express";

class Routes {
	private routeController: sharedController;

	constructor(app: Express, routeController: sharedController) {
		this.routeController = routeController;
		this.configureRoutes(app);
	}

	private configureRoutes(app: Express) {
		app.route(`/download/schedule`).post(this.routeController.takeScreenshot);
	}
}

export default Routes;
