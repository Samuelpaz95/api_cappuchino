import { Irepository, Iservice, Irooms } from "./interfaces";

class Service implements Iservice {
	private repository: Irepository;

	constructor(repository: Irepository) {
		this.repository = repository;
	}

	async getAllRoomsByDepartment(department: string): Promise<Irooms> {
		const allRooms = await this.repository.getAllRoomsByDepartment(department);

		if (!allRooms) return {};

		return allRooms;
	}
}

export default Service;
