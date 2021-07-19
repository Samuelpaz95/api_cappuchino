import fs from "fs";
import { IcarrerOfDepartement } from "../interface";

class Departments {
	private departments = new Map<string, IcarrerOfDepartement[]>();
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

	getDepartment(keyDepartment: string): IcarrerOfDepartement[] | null {
		const department = this.departments.get(keyDepartment);
		return department ? department : null;
	}

	getCarrerByDepartment(
		keyDepartment: string,
		urlCarrer: string
	): IcarrerOfDepartement | null {
		const department = this.getDepartment(keyDepartment);
		if (!department) return null;
		const carrer = department.find(({ semanticUrl }) => semanticUrl == urlCarrer);
		if (!carrer) return null;
		return carrer;
	}
}

export default new Departments();
