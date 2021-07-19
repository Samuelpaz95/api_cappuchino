import { Request, Response } from "express";
import Model from "./model";
import { getBaseUrl } from "./utils/routes";

class Controller {
	async show(req: Request, res: Response): Promise<Response> {
		const department: string = getBaseUrl(req.url);
		const carrer: string = req.params.carrer;

		try {
			const model = await Model.show(department, carrer);
			if (!model) return res.status(404).json({ msg: "Resource not found" });

			return res.status(200).json(model);
		} catch (error) {
			return res.status(422).json({ code: error.code, msg: error.message });
		}
	}

	async get(req: Request, res: Response): Promise<Response> {
		const department: string = getBaseUrl(req.url);

		try {
			const model = await Model.get(department);
			if (!model) return res.status(404).json({ msg: "Resource not found" });

			return res.status(200).json(model);
		} catch (error) {
			return res.status(422).json({ code: error.code, msg: error.message });
		}
	}
}

export default new Controller();
