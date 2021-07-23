import fs from "fs";
import path from "path";
import { Icarrer, IdepartementCarrer } from "../interfaces";

class Carrers {
	private departmentsRoute: string;

	constructor(departmentsRoute: string) {
		this.departmentsRoute = departmentsRoute;
	}

	async getCarrer(
		department: string,
		{ semester, code }: IdepartementCarrer
	): Promise<Icarrer | null> {
		try {
			let response = await this.readCarrer(`${department}/${semester}/${code}.json`);
			if (!response) return null;
			return JSON.parse(response);
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	private readCarrer(routeFile: string): Promise<string | null> {
		return new Promise<string | null>((resolve, reject) => {
			fs.readFile(path.resolve(this.departmentsRoute + routeFile), (err, data) => {
				if (err) {
					console.log(err);
					reject(null);
				}
				resolve(data.toString());
			});
		});
	}
}

export default Carrers;
