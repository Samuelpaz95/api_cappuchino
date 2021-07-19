import { Request, Response } from "express";
import Model from "./model";

class Controller {
	async show(req: Request, res: Response): Promise<Response> {
		try {
			const model = await Model.show();
			if (!model) return res.status(404).json({ msg: "Resource not found" });

			return res.status(200).json(model);
		} catch (error) {
			return res.status(422).json({ code: error.code, msg: error.message });
		}
	}

	async get(req: Request, res: Response): Promise<Response> {
		const department: string = req.url.slice(1);

		try {
			const model = await Model.get(department);
			return res.status(200).json(model);
		} catch (error) {
			return res.status(422).json({ code: error.code, msg: error.message });
		}
	}
}

export default new Controller();
