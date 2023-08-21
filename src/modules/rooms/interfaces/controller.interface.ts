import { Request, Response } from "express";

interface Icontroller {
	getAllRoomsByDepartment(_: Request, res: Response): Promise<Response>;
}

export { Icontroller };
