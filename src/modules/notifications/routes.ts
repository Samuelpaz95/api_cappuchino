import { Icontroller } from "./interfaces";
import { Express } from "express";

class Routes {
	private routeController: Icontroller;
	private breakPoint = "/notifications";

	constructor(app: Express, routeController: Icontroller) {
		this.routeController = routeController;
		this.configureRoutes(app);
	}

	private configureRoutes(app: Express) {
		app.route(`${this.breakPoint}/:department`).get(this.routeController.show);
	}
}

export default Routes;
