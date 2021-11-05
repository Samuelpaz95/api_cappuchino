import { Icontroller } from "./interfaces";
import { Express } from "express";

class Routes {
	private routeController: Icontroller;
	private breakPoint = "/professors";

	constructor(app: Express, routeController: Icontroller) {
		this.routeController = routeController;
		this.configureRoutes(app);
	}

	private configureRoutes(app: Express) {
		app
			.route(`${this.breakPoint}/:department`)
			.get(this.routeController.getAllProfessors);
		app
			.route(`${this.breakPoint}/:department/:professor`)
			.get(this.routeController.getProfessorSubjects);
	}
}

export default Routes;
