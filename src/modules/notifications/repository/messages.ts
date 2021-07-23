import fs from "fs";
import path from "path";
import { Imessages } from "../interfaces";

class Massages {
	private messages = new Map<string, Imessages>();
	private readonly messagePath = "./public/data/messages";

	constructor() {
		this.readMessages();
	}

	private readMessages() {
		fs.readdir(path.resolve(this.messagePath), (error, files: string[]) => {
			if (error) {
				console.log(error);
				return;
			}
			files.forEach((messages: string) => {
				const key = messages.slice(0, messages.length - 5);
				this.addMessages(
					key,
					JSON.parse(
						fs.readFileSync(path.resolve(`${this.messagePath}/${messages}`)).toString()
					)
				);
			});
		});
	}

	private addMessages(key: string, messages: Imessages): void {
		this.messages.set(key, messages);
	}

	getMessage(key: string): Imessages | null {
		const message = this.messages.get(key);
		return message ? message : null;
	}
}

export default new Massages();
