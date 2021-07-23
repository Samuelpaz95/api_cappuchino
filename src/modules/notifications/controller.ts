import { Request, Response } from "express";
import { Icontroller } from "./interfaces";
import Model from "./model";
import {
	clientError,
	successfulRequest,
	resourceNotFound,
} from "../../utils/handlerHttpRequest";

class Controller implements Icontroller {
	show = async (req: Request, res: Response): Promise<Response> => {
		const department: string = req.params.department;

		try {
			const model = await Model.show(department);
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch ({ code, message }) {
			return clientError(res, { code, message });
		}
	};
}

export default new Controller();
