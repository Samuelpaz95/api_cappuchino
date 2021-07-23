import { Icontroller } from "./interfaces";
import { Express } from "express";

class Routes {
	private routeController: Icontroller;
	private breakPoint = "/departments";

	constructor(app: Express, routeController: Icontroller) {
		this.routeController = routeController;
		this.configureRoutes(app);
	}

	private configureRoutes(app: Express) {
		app.route(this.breakPoint).get(this.routeController.get);
		app
			.route(`${this.breakPoint}/:department`)
			.get(this.routeController.getDepartmentCarrers);
		app
			.route(`${this.breakPoint}/:department/:carrer`)
			.get(this.routeController.getDepartmentCarrer);
	}
}

export default Routes;
