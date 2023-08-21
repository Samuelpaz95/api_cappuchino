const groupRooms = (subjects) => {
	const groupedRooms = {};

	subjects.forEach((subject) => {
		subject.groups.forEach((group) => {
			group.schedule.forEach((schedule) => {
				if (!groupedRooms[schedule.room]) {
					groupedRooms[schedule.room] = [];
				}

				if (
					isGroupRepeated({
						groupCode: group.code,
						subjectCode: subject.code,
						groupedRoom: groupedRooms[schedule.room],
					})
				) {
					return;
				}

				groupedRooms[schedule.room].push({
					subject: subject.name,
					subjectCode: subject.code,
					groupCode: group.code,
					...schedule,
				});
			});
		});
	});

	return groupedRooms;
};

const isGroupRepeated = ({ groupCode, subjectCode, groupedRoom }) => {
	return groupedRoom.some(
		(group) => group.subjectCode === subjectCode && group.groupCode === groupCode
	);
};

module.exports = { groupRooms };
