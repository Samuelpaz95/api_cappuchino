import { Response } from "express";

export const clientError = (res: Response, error: unknown) => res.status(422).json(error);

export const resourceNotFound = (res: Response) =>
	res.status(404).json({ message: "Resource not found" });

export const successfulRequest = <T>(res: Response, data: T) =>
	res.status(200).json(data);

export const successfulRequestImage = <T>(res: Response, image: T) => {
	res.set({
		"Content-Type": "image/png",
	});

	return res.send(image);
};

export const badRequest = (res: Response) =>
	res.status(400).json({ message: "Bad Request" });
