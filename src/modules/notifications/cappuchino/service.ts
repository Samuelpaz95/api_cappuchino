import { interfaceData } from "./interface";

class Service {
	async show(): Promise<interfaceData | null> {
		const model = "";
		if (!model) return null;
		return model;
	}
}

export default new Service();
