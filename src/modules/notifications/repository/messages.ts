import fs from "fs";
import path from "path";
import { Imessages } from "../interfaces";

class Massages {
	private messages = new Map<string, Imessages>();
	private readonly messagePath = "./public/data/messages";

	constructor() {
		this.messages = this.readMessages();
	}

	private readMessages() {
		const messages = new Map<string, Imessages>();
		const files = fs.readdirSync(path.resolve(this.messagePath), {
			withFileTypes: true,
		});
		const folders = files.filter((file) => file.isFile());
		folders.forEach(({ name }) => {
			const key = name.slice(0, name.indexOf("."));
			messages.set(
				key,
				JSON.parse(
					fs.readFileSync(path.resolve(`${this.messagePath}/${name}`)).toString()
				)
			);
		});

		return messages;
	}

	getMessage(key: string): Imessages | null {
		const message = this.messages.get(key);
		return message ? message : null;
	}
}

export default new Massages();
