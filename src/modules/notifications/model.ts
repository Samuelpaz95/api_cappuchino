import service from "./repository";

class Model {
	async show() {
		return await service.show();
	}
}

export default new Model();
