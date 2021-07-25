import { Response } from "express";

const clientError = (res: Response, message: string) => res.status(422).json({ message });

const resourceNotFound = (res: Response) =>
	res.status(404).json({ message: "Resource not found" });

const successfulRequest = <T>(res: Response, data: T) => res.status(200).json(data);

export { clientError, resourceNotFound, successfulRequest };
