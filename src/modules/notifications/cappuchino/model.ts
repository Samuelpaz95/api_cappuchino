import service from "./service";

class Model {
	async show() {
		return await service.show();
	}
}

export default new Model();
