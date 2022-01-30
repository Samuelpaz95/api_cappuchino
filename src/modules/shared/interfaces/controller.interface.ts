import { Request, Response } from "express";

interface Icontroller {
	takeScreenshot(req: Request, res: Response): Promise<Response>;
}

export { Icontroller };
