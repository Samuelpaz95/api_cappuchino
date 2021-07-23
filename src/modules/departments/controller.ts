import { Request, Response } from "express";
import Model from "./model";
import {
	clientError,
	resourceNotFound,
	successfulRequest,
} from "../../utils/handlerHttpRequest";

class Controller {
	async getDepartmentCarrer(req: Request, res: Response): Promise<Response> {
		const department: string = req.params.department;
		const carrer: string = req.params.carrer;

		try {
			const model = await Model.getDepartmentCarrer(department, carrer);
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch ({ code, message }) {
			return clientError(res, { code, message });
		}
	}

	async getDepartmentCarrers(req: Request, res: Response): Promise<Response> {
		const department: string = req.params.department;

		try {
			const model = await Model.getDepartmentCarrers(department);
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch ({ code, message }) {
			return clientError(res, { code, message });
		}
	}
}

export default new Controller();
