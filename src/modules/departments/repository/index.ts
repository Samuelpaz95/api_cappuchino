import { IdepartementCarrer, Icarrer, Irepository } from "../interfaces";
import Departments from "./departments";
import Carrers from "./carrers";

class Repository implements Irepository {
	private carrers: Carrers;
	private departments: Departments;
	private readonly departmentsRoute: string = "./public/data/departments";

	constructor() {
		this.carrers = new Carrers(this.departmentsRoute);
		this.departments = new Departments(this.departmentsRoute);
	}

	async getDepartmentCarrer(
		department: string,
		IndexCarrer: IdepartementCarrer
	): Promise<Icarrer | null> {
		return this.carrers.getCarrer(department, IndexCarrer);
	}

	async getIndexCarrerByDepartment(
		department: string,
		nameCarrer: string
	): Promise<IdepartementCarrer | null> {
		return this.departments.getCarrerByDepartment(department, nameCarrer);
	}

	async getDepartmentCarrers(department: string): Promise<IdepartementCarrer[] | null> {
		return this.departments.getDepartment(department);
	}

	async getDepartments() {
		return this.departments.getDepartments();
	}
}

export default Repository;
