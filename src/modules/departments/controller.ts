import { Request, Response } from "express";
import { Imodel, Icontroller } from "./interfaces";
import {
	clientError,
	resourceNotFound,
	successfulRequest,
} from "../../utils/handlerHttpRequest";

class Controller implements Icontroller {
	private model: Imodel;

	constructor(model: Imodel) {
		this.model = model;
	}

	getInfoDeparments = async (_: Request, res: Response): Promise<Response> => {
		try {
			const model = await this.model.getDepartments();
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch (error) {
			return clientError(res, "");
		}
	};

	getDepartmentCarrer = async (req: Request, res: Response): Promise<Response> => {
		const department: string = req.params.department;
		const carrer: string = req.params.carrer;

		try {
			const model = await this.model.getDepartmentCarrer(department, carrer);
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch (error) {
			return clientError(res, "");
		}
	};

	getDepartmentCarrers = async (req: Request, res: Response): Promise<Response> => {
		const department: string = req.params.department;

		try {
			const model = await this.model.getDepartmentCarrers(department);
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch (error) {
			return clientError(res, "");
		}
	};
}

export default Controller;
