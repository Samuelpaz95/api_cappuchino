import { Request, Response } from "express";
import { Iservice, Icontroller } from "./interfaces";
import {
	clientError,
	resourceNotFound,
	successfulRequest,
} from "../../utils/handlerHttpRequest";

class Controller implements Icontroller {
	private service: Iservice;

	constructor(service: Iservice) {
		this.service = service;
	}

	getInfoDeparments = async (_: Request, res: Response): Promise<Response> => {
		try {
			const model = await this.service.getDepartments();
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
			const model = await this.service.getDepartmentCarrer(department, carrer);
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch (error) {
			return clientError(res, "");
		}
	};

	getDepartmentCarrers = async (req: Request, res: Response): Promise<Response> => {
		const department: string = req.params.department;

		try {
			const model = await this.service.getDepartmentCarrers(department);
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch (error) {
			return clientError(res, "");
		}
	};
}

export default Controller;
