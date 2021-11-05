import { Irepository, Imodel } from "./interfaces";

class Model implements Imodel {
	private repository: Irepository;

	constructor(repository: Irepository) {
		this.repository = repository;
	}
}

export default Model;
