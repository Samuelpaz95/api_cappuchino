import { Request, Response } from "express";

interface Icontroller {
	getInfoDeparments(_: Request, res: Response): Promise<Response>;

	getDepartmentCarrer(req: Request, res: Response): Promise<Response>;

	getDepartmentCarrers(req: Request, res: Response): Promise<Response>;
}

export { Icontroller };
