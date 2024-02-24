import { INews, Irepository } from "./interfaces";
import { readFile } from "fs";
import { resolve as pathResolve } from "path";

class Repository implements Irepository {
	private readonly route: string = "./public/data/departments/fcyt";

	getNews() {
		return new Promise<INews | null>((resolve, reject) => {
			readFile(pathResolve(`${this.route}/news.json`), (err, data) => {
				if (err) {
					console.log(err);
					reject(null);
				}
				resolve(JSON.parse(data.toString()));
			});
		});
	}
}

export default Repository;
