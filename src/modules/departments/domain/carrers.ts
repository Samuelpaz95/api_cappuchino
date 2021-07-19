import fs from "fs";
import { Icarrer, IcarrerOfDepartement } from "../interface";
import { pathDepartments } from "../utils/routes";

class Carrers {
	//TODO: hacerlo asincrono y trycatch por si no se accede al documento
	getCarrer(
		department: string,
		{ code, semester }: IcarrerOfDepartement
	): Icarrer | null {
		const data = JSON.parse(
			fs
				.readFileSync(`${pathDepartments}/${department}/${semester}/${code}.json`)
				.toString()
		);
		if (!data) return null;
		return data;
	}
}

export default new Carrers();
