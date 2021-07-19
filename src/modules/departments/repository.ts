import { carrerOfDepartement } from "./interface";
import departments from "./domain/departments";
import fs from "fs";
const filesRoute = "./public/data";

class Repository {
	async show(department: string, carrer: string): Promise<[]> {
		const model = "";
		if (!model) return [];
		return model;
	}

	async get(department: string): Promise<carrerOfDepartement[] | null> {
		return departments.getDepartment(department);
	}
}

export default new Repository();
