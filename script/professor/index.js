const { cleanSubjects } = require("./cleanSubjects");
const { writeFileSync } = require("fs");
const ROUTE = "./public/data/";

const subjectsByDepartments = cleanSubjects(ROUTE + "departments/");

subjectsByDepartments.forEach((subjectsByDepartment) => {
	const professors = new Set();
	subjectsByDepartment.subjects.forEach((subject) => {
		subject.groups.forEach(({ teacher }) => {
			professors.add(teacher);
		});
	});

	writeFileSync(
		ROUTE + `professors/${subjectsByDepartment.deparment}/teachers.json`,
		JSON.stringify([...professors])
	);
});
