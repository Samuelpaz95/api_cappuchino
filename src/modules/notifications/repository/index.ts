import { Irepository, Imessages } from "../interfaces";
import Messages from "./messages";

class Repository implements Irepository {
	private messages: Messages;
	private readonly messageRoute: string = "./public/data/messages";

	constructor() {
		this.messages = new Messages(this.messageRoute);
	}

	async getMessageByDepartment(department: string): Promise<Imessages | null> {
		if (department == "general") return null;
		return this.messages.getMessage(department);
	}

	async getGerneralMessage(): Promise<Imessages | null> {
		return this.messages.getMessage("general");
	}
}

export default Repository;
