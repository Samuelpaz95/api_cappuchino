import { INews, Irepository, Iservice } from "./interfaces";

class Service implements Iservice {
	private repository: Irepository;

	constructor(repository: Irepository) {
		this.repository = repository;
	}

	getNews(): Promise<INews | null> {
		return this.repository.getNews();
	}
}

export default Service;
