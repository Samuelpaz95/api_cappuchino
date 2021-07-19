import fs from "fs";
import { carrerOfDepartement } from "../interface";

class Departments {
	private departments = new Map<string, carrerOfDepartement[]>();
	private readonly pathFile = "./public/data";
	constructor() {
		this.buildDepartments();
	}

	private buildDepartments(): void {
		fs.readdir(this.pathFile, (err, files: string[]) => {
			if (err) {
				console.log(err);
				return;
			}

			files.forEach((file: string) => {
				this.departments.set(
					file.toLocaleLowerCase(),
					JSON.parse(fs.readFileSync(`${this.pathFile}/${file}/index.json`).toString())
				);
			});
		});
	}

	getDepartment(keyDepartment: string): carrerOfDepartement[] | null {
		const department = this.departments.get(keyDepartment);
		return department ? department : null;
	}
}

export default new Departments();
