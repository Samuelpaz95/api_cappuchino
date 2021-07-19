import repository from "./repository";

class Model {
	async show(department: string, carrer: string) {
		return await repository.show(department, carrer);
	}

	async get(department: string) {
		return await repository.get(department);
	}
}

export default new Model();
