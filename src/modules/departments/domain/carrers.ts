import fs from "fs";
import { Icarrer, IdepartementCarrer } from "../interface";
import { pathDepartments } from "../utils/routes";

class Carrers {
	async getCarrer(
		department: string,
		{ semester, code }: IdepartementCarrer
	): Promise<Icarrer | null> {
		try {
			let response = await this.readCarrer(`${department}/${semester}/${code}`);
			if (!response) return null;
			return JSON.parse(response);
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	private readCarrer(routeFile: string): Promise<string | null> {
		return new Promise<string | null>((resolve, reject) => {
			fs.readFile(pathDepartments(`/${routeFile}.json`), (err, data) => {
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
