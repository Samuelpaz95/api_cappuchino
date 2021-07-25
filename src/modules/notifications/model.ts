import { Imodel, Irepository, Imessages } from "./interfaces";

class Model implements Imodel {
	private repository: Irepository;

	constructor(repository: Irepository) {
		this.repository = repository;
	}

	async show(department: string): Promise<Imessages | null> {
		const departmentMessages = await this.repository.getMessageByDepartment(department);
		if (departmentMessages == null) {
			return null;
		}
		const generalMessages = await this.repository.getGerneralMessage();
		if (generalMessages == null) {
			return departmentMessages;
		}
		return generalMessages.concat(departmentMessages);
	}
}

export default Model;
