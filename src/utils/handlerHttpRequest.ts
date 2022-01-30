import { Response } from "express";

export const clientError = (res: Response, message: string) =>
	res.status(422).json({ message });

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
