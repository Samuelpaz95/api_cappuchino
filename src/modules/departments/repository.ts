import { IcarrerOfDepartement, Icarrer } from "./interface";
import departments from "./domain/departments";
import carrers from "./domain/carrers";

class Repository {
	async getDepartmentCarrer(
		department: string,
		nameCarrer: string
	): Promise<Icarrer | null> {
		const IndexCarrer = departments.getCarrerByDepartment(department, nameCarrer);
		if (!IndexCarrer) return null;
		return carrers.getCarrer(department, IndexCarrer);
	}

	async getDepartmentCarrers(department: string): Promise<IcarrerOfDepartement[] | null> {
		return departments.getDepartment(department);
	}
}

export default new Repository();
