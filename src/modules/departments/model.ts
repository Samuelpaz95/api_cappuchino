import { Icarrer } from "./interface";
import repository from "./repository";

class Model {
	async getDepartments() {
		return repository.getDepartments();
	}

	async getDepartmentCarrer(department: string, carrer: string): Promise<Icarrer | null> {
		const IndexCarrer = await repository.getIndexCarrerByDepartment(department, carrer);
		if (!IndexCarrer) return null;
		return repository.getDepartmentCarrer(department, IndexCarrer);
	}

	async getDepartmentCarrers(department: string) {
		return await repository.getDepartmentCarrers(department);
	}
}

export default new Model();
