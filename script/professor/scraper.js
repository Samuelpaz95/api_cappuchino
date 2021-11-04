function professorsByDeparment(subjectsByDepartments) {
	const professorsByDeparment = {};

	Object.entries(subjectsByDepartments).forEach(([deparment, subjects]) => {
		const professors = new Set();
		console.log(subjects);

		subjects.forEach(({ groups }) => {
			groups.forEach(({ teacher }) => {
				professors.add(teacher);
			});
		});

		professorsByDeparment[deparment] = [...professors];
	});

	return professorsByDeparment;
}

module.exports = {
	professorsByDeparment,
};
