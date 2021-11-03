import { readFileSync } from "fs";
const ROOT_FILE = "./public/data/departments/";

const facultiesDataUnformated = readFileSync(ROOT_FILE + "index.json");
const faculties = JSON.parse(facultiesDataUnformated).map(
	({ semanticName }) => semanticName
);

const subjectInfoByDepartment = faculties
	.map((faculty) => readFileSync(ROOT_FILE + `${faculty}/index.json`))
	.map(JSON.parse)
	.map((subject, i) =>
		subject.map(({ code, semester }) => ({
			code,
			semester,
			faculty: faculties[i],
		}))
	);

const subjectsByDeparments = subjectInfoByDepartment
	.map((subjectInfo) =>
		subjectInfo
			.map(({ code, faculty, semester }) =>
				readFileSync(ROOT_FILE + `${faculty}/${semester}/${code}.json`)
			)
			.map(JSON.parse)
			.map(({ levels }) => levels)
			.flat()
			.map(({ subjects }) => subjects)
			.flat()
			.map((subject) => ({
				...subject,
				department: subjectInfo[0].faculty,
			}))
	)
	.flat();

const repeatedGroups = new Set();
const filteredSubjects = subjectsByDeparments.map((subject) => {
	subject.groups = subject.groups.filter((group) => {
		if (!repeatedGroups.has(`${subject.department}/${subject.name}/${group.code}`)) {
			repeatedGroups.add(`${subject.department}/${subject.name}/${group.code}`);
			return true;
		}
		return false;
	});
	return subject;
});
