import messages from "./domain/messages";

class Service {
	async getMessageByDepartment(department: string): Promise<string[] | null> {
		return messages.getMessage(department);
	}

	async getGerneralMessage(): Promise<string[] | null> {
		return messages.getMessage("general");
	}
}

export default new Service();
