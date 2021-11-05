import { Isubject } from "../shared/interfaces";
import { ImapProfessors, Iprofessors, Irepository } from "./interfaces";
import { readFile } from "fs";
import { resolve as pathResolve } from "path";

class Repository implements Irepository {
	private readonly route: string = "./public/data/professors";

	getAllProfessors(department: string): Promise<Iprofessors | null> {
		return new Promise<Iprofessors | null>((resolve, reject) => {
			readFile(pathResolve(`${this.route}/${department}/teachers.json`), (err, data) => {
				if (err) {
					console.log(err);
					reject(null);
				}
				resolve(JSON.parse(data.toString()));
			});
		});
	}

	getProfessorSubjects(department: string): Promise<ImapProfessors | null> {
		return new Promise<ImapProfessors | null>((resolve, reject) => {
			readFile(
				pathResolve(`${this.route}/${department}/teachersContent.json`),
				(err, data) => {
					if (err) {
						console.log(err);
						reject(null);
					}
					resolve(JSON.parse(data.toString()));
				}
			);
		});
	}
}

export default Repository;
