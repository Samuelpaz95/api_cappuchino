import repository from "./repository";

class Model {
	async show() {
		return await repository.show();
	}

	async get(department: string) {
		return await repository.get(department);
	}
}

export default new Model();
