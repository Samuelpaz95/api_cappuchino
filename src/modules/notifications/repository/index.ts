import { Irepository } from "../interfaces";
import messages from "./messages";

class Service implements Irepository {
	async getMessageByDepartment(department: string): Promise<string[] | null> {
		if (department == "general") return null;
		return messages.getMessage(department);
	}

	async getGerneralMessage(): Promise<string[] | null> {
		return messages.getMessage("general");
	}
}

export default new Service();
