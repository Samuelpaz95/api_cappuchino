const { cleanSubjects } = require("./cleanSubjects");
const { professorsByDeparment } = require("./scraper");
const { writeFileSync } = require("fs");
const ROUTE = "./public/data/";

const subjectsByDepartments = cleanSubjects(ROUTE + "departments/");
const professors = professorsByDeparment(subjectsByDepartments);

professors.forEach(({ deparment, professors }) => {
	writeFileSync(
		ROUTE + `professors/${deparment}/teachers.json`,
		JSON.stringify([...professors])
	);
});
