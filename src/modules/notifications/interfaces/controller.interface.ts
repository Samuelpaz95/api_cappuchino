import { Request, Response } from "express";

interface Icontroller {
	show(req: Request, res: Response): Promise<Response>;
}

export { Icontroller };
