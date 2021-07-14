import service from "./service";

class Model {
	async show() {
		return await service.show();
	}

	async get() {
		return await service.get();
	}
}

export default new Model();
