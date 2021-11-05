function professorsByDeparment(subjectsByDepartments) {
	const professorsByDeparment = {};

	Object.entries(subjectsByDepartments).forEach(([deparment, subjects]) => {
		const professors = new Set();

		subjects.forEach(({ groups }) => {
			groups.forEach(({ teacher }) => {
				professors.add(teacher);
			});
		});

		professorsByDeparment[deparment] = [...professors];
	});

	return professorsByDeparment;
}

function subjectsByProfessors(subjects, professors) {
	const objProfessors = objectProfessors(professors);

	subjects.forEach((subject) => {
		subject.groups.forEach((group) => {
			const ownGroups = subject.groups.filter(
				({ teacher }) =>
					teacher == group.teacher &&
					!objProfessors[group.teacher].find(({ name }) => subject.name == name)
			);
			// hay grupos que se repiten :c
			if (ownGroups.length > 0) {
				objProfessors[group.teacher].push({
					...subject,
					groups: ownGroups,
				});
			}
		});
	});

	return objProfessors;
}

function objectProfessors(professors) {
	const obj = {};
	professors.forEach((professor) => {
		obj[professor] = [];
	});
	return obj;
}

module.exports = {
	professorsByDeparment,
	subjectsByProfessors,
};
