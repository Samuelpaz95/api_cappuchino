import { Request, Response } from "express";

interface Icontroller {
	getAllProfessors(req: Request, res: Response): Promise<Response>;

	getProfessorSubjects(req: Request, res: Response): Promise<Response>;
}

export { Icontroller };
