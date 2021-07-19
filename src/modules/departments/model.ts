import repository from "./repository";

class Model {
	async show() {
		return await repository.show();
	}

	async get() {
		return await repository.get();
	}
}

export default new Model();
