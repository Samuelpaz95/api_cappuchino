import { INews } from ".";

interface Iservice {
	getNews(): Promise<INews | null>;
}

export { Iservice };
