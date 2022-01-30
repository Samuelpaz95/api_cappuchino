import { Request, Response } from "express";
import { clientError, successfulRequestImage } from "../../utils/handlerHttpRequest";
import { sharedController, sharedService } from "./interfaces";

class Controller implements sharedController {
	private service: sharedService;

	constructor(service: sharedService) {
		this.service = service;
	}

	takeScreenshot = async (req: Request, res: Response) => {
		const contentHtml: string = req.body.contentHtml;

		try {
			const image = await this.service.takeScreenshotInBase64(contentHtml);

			return successfulRequestImage(res, image);
		} catch (error) {
			return clientError(res, "");
		}
	};
}

export default Controller;