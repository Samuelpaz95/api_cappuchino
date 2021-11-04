const { readFileSync } = require("fs");

const cleanSubjects = (route) => {
	const facultiesDataUnformated = readFileSync(route + "index.json");
	const faculties = JSON.parse(facultiesDataUnformated).map(
		({ semanticName }) => semanticName
	);

	const subjectInfoByDepartment = faculties
		.map((faculty) => readFileSync(route + `${faculty}/index.json`))
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
				readFileSync(route + `${faculty}/${semester}/${code}.json`)
			)
			.map(JSON.parse)
			.map(({ levels }) => levels)
			.flat()
			.map(({ subjects }) => subjects)
			.flat()
	);

	const subjectsByDeparment = {};
	subjectsByDeparments.forEach((subjetsByDeparment, i) => {
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

		subjectsByDeparment[faculties[i]] = filteredSubjects;
	});

	return subjectsByDeparment;
};

module.exports = { cleanSubjects };
