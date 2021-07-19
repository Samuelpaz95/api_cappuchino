import { carrerOfDepartement } from "./interface";
import departments from "./domain/departments";
import fs from "fs";
const filesRoute = "./public/data";

class Repository {
	async show(): Promise<[]> {
		const model = "";
		if (!model) return [];
		return model;
	}

	async get(department: string = "fcyt"): Promise<carrerOfDepartement[] | null> {
		return departments.getDepartment(department);
	}
}

export default new Repository();
