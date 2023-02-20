import { Request, Response } from "express";
import {
	clientError,
	resourceNotFound,
	successfulRequest,
} from "../../utils/handlerHttpRequest";
import { Icontroller, Iservice } from "./interfaces";

class Controller implements Icontroller {
	private service: Iservice;

	constructor(service: Iservice) {
		this.service = service;
	}

	getNews = async (req: Request, res: Response): Promise<Response> => {
		try {
			const model = await this.service.getNews();
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch (error) {
			return clientError(res, "");
		}
	};
}

export default Controller;
