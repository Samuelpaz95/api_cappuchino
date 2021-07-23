import repository from "./repository";
import { Imodel } from "./interfaces";

class Model implements Imodel {
	async show(department: string) {
		const departmentMessages = await repository.getMessageByDepartment(department);
		if (departmentMessages == null) {
			return null;
		}
		const generalMessages = await repository.getGerneralMessage();
		if (generalMessages == null) {
			return departmentMessages;
		}
		return generalMessages.concat(departmentMessages);
	}
}

export default new Model();
