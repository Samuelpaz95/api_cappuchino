import { Request, Response } from "express";
import { Icontroller, Imodel } from "./interfaces";
import {
	clientError,
	successfulRequest,
	resourceNotFound,
} from "../../utils/handlerHttpRequest";

class Controller implements Icontroller {
	private model: Imodel;

	constructor(model: Imodel) {
		this.model = model;
	}

	show = async (req: Request, res: Response): Promise<Response> => {
		const department: string = req.params.department;

		try {
			const model = await this.model.show(department);
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch (message) {
			return clientError(res, message);
		}
	};
}

export default Controller;
