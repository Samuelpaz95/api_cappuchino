const { readFileSync } = require("fs");
const ROOT_FILE = "./public/data/departments/";

const cleanSubjects = () => {
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

	const subjectsByDeparments = subjectInfoByDepartment.map((subjectInfo) =>
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
			}))
	);

	const subjectsFilteredByDepament = subjectsByDeparments.map((subjetsByDeparment, i) => {
		const repeatedGroups = new Set();
		const filteredSubjects = subjetsByDeparment.map((subject) => {
			subject.groups = subject.groups.filter((group) => {
				if (!repeatedGroups.has(`${faculties[i]}/${subject.name}/${group.code}`)) {
					repeatedGroups.add(`${faculties[i]}/${subject.name}/${group.code}`);
					return true;
				}
				return false;
			});
			return subject;
		});

		return {
			deparment: faculties[i],
			filteredSubjects,
		};
	});

	return subjectsFilteredByDepament;
};

module.exports = { cleanSubjects };
