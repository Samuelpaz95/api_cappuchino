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
		console.log(this.service);
	}

	getAllRoomsByDepartment = async (req: Request, res: Response): Promise<Response> => {
		try {
			const department: string = req.params.department;

			const model = await this.service.getAllRoomsByDepartment(department);
			if (!model) return resourceNotFound(res);

			return successfulRequest(res, model);
		} catch (error) {
			console.log(error);

			return clientError(res, "");
		}
	};
}

export default Controller;
