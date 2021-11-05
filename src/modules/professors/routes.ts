import { Icontroller } from "./interfaces";
import { Express } from "express";

class Routes {
	private routeController: Icontroller;
	private breakPoint = "/departments";

	constructor(app: Express, routeController: Icontroller) {
		this.routeController = routeController;
		this.configureRoutes(app);
	}

	private configureRoutes(app: Express) {}
}

export default Routes;
