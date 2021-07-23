import fs from "fs";
import path from "path";
import { IdepartementCarrer, Idepartment } from "../interfaces";

class Departments {
	private departments = new Map<string, IdepartementCarrer[]>();
	private descriptionDepartments: Idepartment[] = [];
	private departmentsRoute: string;

	constructor(departmentsRoute: string) {
		this.departmentsRoute = departmentsRoute;
		this.departments = this.buildDepartments();
		this.descriptionDepartments = this.readDescriptionDepartments();
	}

	private readDescriptionDepartments(): Idepartment[] {
		return JSON.parse(
			fs.readFileSync(path.resolve(this.departmentsRoute + "/index.json")).toString()
		);
	}

	private buildDepartments(): Map<string, IdepartementCarrer[]> {
		const departments = new Map<string, IdepartementCarrer[]>();
		const files = fs.readdirSync(path.resolve(this.departmentsRoute), {
			withFileTypes: true,
		});
		const folders = files.filter((file) => file.isDirectory());
		folders.forEach(({ name }) => {
			departments.set(
				name,
				JSON.parse(
					fs
						.readFileSync(path.resolve(this.departmentsRoute + `/${name}/index.json`))
						.toString()
				)
			);
		});
		return departments;
	}

	getDepartment(keyDepartment: string): IdepartementCarrer[] | null {
		const department = this.departments.get(keyDepartment);
		return department ? department : null;
	}

	getCarrerByDepartment(
		keyDepartment: string,
		urlCarrer: string
	): IdepartementCarrer | null {
		const department = this.getDepartment(keyDepartment);
		if (!department) return null;
		const carrer = department.find(({ semanticName }) => semanticName == urlCarrer);
		if (!carrer) return null;
		return carrer;
	}

	getDepartments(): Idepartment[] {
		return this.descriptionDepartments;
	}
}

export default Departments;
