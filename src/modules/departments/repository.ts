import { IdepartementCarrer, Icarrer } from "./interface";
import Departments from "./domain/departments";
import Carrers from "./domain/carrers";

class Repository {
	private carrers: Carrers;
	private departments: Departments;

	constructor() {
		this.carrers = new Carrers();
		this.departments = new Departments();
	}

	async getDepartmentCarrer(
		department: string,
		IndexCarrer: IdepartementCarrer
	): Promise<Icarrer | null> {
		return this.carrers.getCarrer(department, IndexCarrer);
	}

	async getIndexCarrerByDepartment(department: string, nameCarrer: string) {
		return this.departments.getCarrerByDepartment(department, nameCarrer);
	}

	async getDepartmentCarrers(department: string): Promise<IdepartementCarrer[] | null> {
		return this.departments.getDepartment(department);
	}

	async getDepartments() {
		return this.departments.getDepartments();
	}
}

export default new Repository();
