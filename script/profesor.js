const fs = require("fs");
const ROOT_FILE = "./public/data/departments/";

const facultiesDataUnformated = fs.readFileSync(ROOT_FILE + "index.json");
const faculties = JSON.parse(facultiesDataUnformated).map(
	({ semanticName }) => semanticName
);

const subjectInfoByDepartment = faculties
	.map((faculty) => fs.readFileSync(ROOT_FILE + `${faculty}/index.json`))
	.map(JSON.parse)
	.map((subject, i) =>
		subject.map(({ code, semester }) => ({
			code,
			semester,
			faculty: faculties[i],
		}))
	);

const allSubjects = subjectInfoByDepartment
	.map((subjectInfo) =>
		subjectInfo
			.map(({ code, faculty, semester }) =>
				fs.readFileSync(ROOT_FILE + `${faculty}/${semester}/${code}.json`)
			)
			.map(JSON.parse)
			.map(({ levels }) => levels)
			.flat()
			.map(({ subjects }) => subjects)
			.flat()
			.map((subject) => ({
				...subject,
				code: subject.code + subjectInfo[0].faculty,
			}))
	)
	.flat();

//filter repeated groups by subject code and codeGroup
console.log(allSubjects);
