const { readFileSync, writeFileSync } = require("fs");

const ROUTE = "./public/data/";

/** @type {{ semanticName: string, name: string, madeIn: string }[]} */
const departaments = JSON.parse(readFileSync(ROUTE + "departments/index.json", "utf-8"));
departaments.forEach(({ semanticName }) => {
	const filepath = ROUTE + "departments/" + semanticName + "/index.json";
	/**@type {{ code: string, semanticName?: string, name:string, madeIn:string, semester:string }[]} */
	let departamentIndexes = JSON.parse(readFileSync(filepath));
	departamentIndexes = departamentIndexes.map((depIndex) => {
		if (!depIndex.semanticName) {
			depIndex.semanticName = depIndex.name
				.toLowerCase()
				.replace(/ /gi, "_")
				.replace("(nuevo)", "n");
		}
		if (depIndex.semester.includes("/")) {
			const [gestion, year] = depIndex.semester.split("/");
			depIndex.semester = `${year}-${gestion}`;
		}
		return depIndex;
	});
	writeFileSync(filepath, JSON.stringify(departamentIndexes, null, 2));
	console.log("> 👍", semanticName, "department indexes updated");
});
