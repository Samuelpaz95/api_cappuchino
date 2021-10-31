const fs = require("fs");
const ROOT_FILE = "./public/data/departments/";

const facultiesDataUnformated = fs.readFileSync(ROOT_FILE + "index.json");
const facultiesData = JSON.parse(facultiesDataUnformated);
const faculties = facultiesData.map(({ semanticName }) => semanticName);

const subjectInfo = faculties
	.map((faculty) => fs.readFileSync(ROOT_FILE + `${faculty}/index.json`))
	.map(JSON.parse)
	.map((subject, i) =>
		subject.map(({ code, semester }) => ({
			code,
			semester,
			faculty: faculties[i],
		}))
	)
	.flat();

const levels = subjectInfo
	.map(({ code, faculty, semester }) =>
		fs.readFileSync(ROOT_FILE + `${faculty}/${semester}/${code}.json`)
	)
	.map(JSON.parse);
// .map(({ levels }) => levels);

console.log(levels);
