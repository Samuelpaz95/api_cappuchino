import { INews } from ".";

interface Irepository {
	getNews(): Promise<INews | null>;
}

export { Irepository };
