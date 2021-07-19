import { Response } from "express";

const clientError = (
	res: Response,
	{ code, message }: { code: string; message: string }
) => res.status(422).json({ code, message });

const resourceNotFound = (res: Response) =>
	res.status(404).json({ msg: "Resource not found" });

const successfulRequest = <T>(res: Response, data: T) => res.status(200).json(data);

export { clientError, resourceNotFound, successfulRequest };
