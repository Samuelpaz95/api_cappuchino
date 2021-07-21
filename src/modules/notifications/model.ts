import repository from "./repository";

class Model {
	async show(department: string) {
		const generalMessages = await repository.getGerneralMessage();
		const departmentMessages = await repository.getMessageByDepartment(department);
		if (departmentMessages == null) {
			return null;
		}
		if (generalMessages == null) {
			return departmentMessages;
		}
		return generalMessages.concat(departmentMessages);
	}
}

export default new Model();
