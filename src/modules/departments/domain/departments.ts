import fs from "fs";
import { IcarrerOfDepartement } from "../interface";
import { pathDepartments } from "../utils/routes";

class Departments {
	private departments = new Map<string, IcarrerOfDepartement[]>();

	constructor() {
		this.buildDepartments();
	}

	private buildDepartments(): void {
		fs.readdir(pathDepartments(), (err, files: string[]) => {
			if (err) {
				console.log(err);
				return;
			}
			files.forEach((file: string) => {
				this.addDepartment(
					file.toLocaleLowerCase(),
					JSON.parse(fs.readFileSync(pathDepartments(`/${file}/index.json`)).toString())
				);
			});
		});
	}

	private addDepartment(key: string, departmentCarrer: IcarrerOfDepartement[]) {
		this.departments.set(key, departmentCarrer);
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
