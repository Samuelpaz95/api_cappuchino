import { IdepartementCarrer, Icarrer } from "./interface";
import departments from "./domain/departments";
import carrers from "./domain/carrers";

class Repository {
	async getDepartmentCarrer(
		department: string,
		IndexCarrer: IdepartementCarrer
	): Promise<Icarrer | null> {
		return carrers.getCarrer(department, IndexCarrer);
	}

	async getIndexCarrerByDepartment(department: string, nameCarrer: string) {
		return departments.getCarrerByDepartment(department, nameCarrer);
	}

	async getDepartmentCarrers(department: string): Promise<IdepartementCarrer[] | null> {
		return departments.getDepartment(department);
	}

	async getDepartments() {
		return departments.getDepartments();
	}
}

export default new Repository();
