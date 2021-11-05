import { Irepository, Iservice } from "./interfaces";

class Service implements Iservice {
	private repository: Irepository;

	constructor(repository: Irepository) {
		this.repository = repository;
	}
}

export default Service;
