import repository from "./repository";

class Model {
	async getDepartmentCarrer(department: string, carrer: string) {
		return await repository.getDepartmentCarrer(department, carrer);
	}

	async getDepartmentCarrers(department: string) {
		return await repository.getDepartmentCarrers(department);
	}
}

export default new Model();
