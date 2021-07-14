import { interfaceData } from "./interface";

class Service {
	async show(): Promise<interfaceData | null> {
		const model = "";
		if (!model) return null;
		return model;
	}

	async get(): Promise<interfaceData[] | []> {
		const model = "";
		if (!model) return [];
		return model;
	}
}

export default new Service();
