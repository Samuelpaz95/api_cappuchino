const { cleanSubjects } = require("./cleanSubjects");
const { professorsByDeparment, subjectsByProfessors } = require("./scraper");
const { writeFileSync } = require("fs");
const ROUTE = "./public/data/";

const subjectsByDepartments = cleanSubjects(ROUTE + "departments/");
const professors = professorsByDeparment(subjectsByDepartments);

Object.entries(professors).forEach(([deparment, professors]) => {
	writeFileSync(
		ROUTE + `professors/${deparment}/teachers.json`,
		JSON.stringify(professors)
	);
});

Object.entries(subjectsByDepartments).forEach(([deparment, subjects]) => {
	const professorSubjects = subjectsByProfessors(subjects, professors[deparment]);
	writeFileSync(
		ROUTE + `professors/${deparment}/teachersContent.json`,
		JSON.stringify(professorSubjects)
	);
});
