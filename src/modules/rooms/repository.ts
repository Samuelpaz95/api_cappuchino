import { Irepository, Irooms } from "./interfaces";
import { readFile, existsSync } from "fs";
import { resolve as pathResolve } from "path";

class Repository implements Irepository {
	private readonly route: string = "./public/data/rooms";

	getAllRoomsByDepartment(department: string): Promise<Irooms | null> {
		const path = pathResolve(`${this.route}/${department}/index.json`);

		return new Promise((resolve, reject) => {
			if (!existsSync(path)) {
				console.log("File not found");
				reject(null);
			}

			readFile(path, (err, data) => {
				if (err) {
					console.log(err);
					reject(null);
				}

				resolve(JSON.parse(data?.toString()));
			});
		});
	}
}

export default Repository;
