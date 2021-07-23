import { IcarrerOfDepartement, Icarrer } from "./interface";
import departments from "./domain/departments";
import carrers from "./domain/carrers";

class Repository {
	async getDepartmentCarrer(
		department: string,
		IndexCarrer: IcarrerOfDepartement
	): Promise<Icarrer | null> {
		return carrers.getCarrer(department, IndexCarrer);
	}

	async getIndexCarrerByDepartment(department: string, nameCarrer: string) {
		return departments.getCarrerByDepartment(department, nameCarrer);
	}

	async getDepartmentCarrers(department: string): Promise<IcarrerOfDepartement[] | null> {
		return departments.getDepartment(department);
	}
}

export default new Repository();
