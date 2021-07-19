import { Request, Response } from "express";
import Model from "./model";
import {
	clientError,
	successfulRequest,
	resourceNotFound,
} from "../../utils/handlerHttpRequest";

class Controller {
	async show(req: Request, res: Response): Promise<Response> {
		try {
			const model = await Model.show();
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch ({ code, message }) {
			return clientError(res, { code, message });
		}
	}
}

export default new Controller();
