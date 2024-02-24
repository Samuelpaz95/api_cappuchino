import { Request, Response } from "express";

interface Icontroller {
	getNews(req: Request, res: Response): Promise<Response>;
}

export { Icontroller };
