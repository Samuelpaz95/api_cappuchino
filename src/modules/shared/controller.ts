import { Request, Response } from "express";
import {
	clientError,
	successfulRequestImage,
	badRequest,
} from "../../utils/handlerHttpRequest";
import { sharedController, sharedService } from "./interfaces";

class Controller implements sharedController {
	private service: sharedService;

	constructor(service: sharedService) {
		this.service = service;
	}

	takeScreenshot = async (req: Request, res: Response) => {
		const contentHtml: string = req.body.contentHtml;
		const cssVariables: string = req.body.cssVariables;

		try {
			if (contentHtml && cssVariables) return badRequest(res);
			const image = await this.service.takeScreenshotInBase64(contentHtml, cssVariables);

			return successfulRequestImage(res, image);
		} catch (error) {
			return clientError(res, error);
		}
	};
}

export default Controller;
