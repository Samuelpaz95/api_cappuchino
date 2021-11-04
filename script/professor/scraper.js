function professorsByDeparment(subjectsByDepartments) {
	const professorsByDeparment = [];

	subjectsByDepartments.forEach(({ subjects, deparment }) => {
		const professors = new Set();

		subjects.forEach(({ groups }) => {
			groups.forEach(({ teacher }) => {
				professors.add(teacher);
			});
		});

		professorsByDeparment.push({
			deparment,
			professors: [...professors],
		});
	});

	return professorsByDeparment;
}

module.exports = {
	professorsByDeparment,
};
