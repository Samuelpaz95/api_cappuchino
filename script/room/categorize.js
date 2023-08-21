const categorize = (rooms) => {
	const categorizedRooms = {};

	const schedulesByRoom = Object.entries(rooms);

	schedulesByRoom.forEach(([room, schedules]) => {
		const categorizedByDays = {};

		schedules.forEach((schedule) => {
			if (!categorizedByDays[schedule.day]) {
				categorizedByDays[schedule.day] = [];
			}

			categorizedByDays[schedule.day] = orderSubjectsByHour([
				...categorizedByDays[schedule.day],
				schedule,
			]);
		});

		categorizedRooms[room] = categorizedByDays;
	});

	return categorizedRooms;
};

const orderSubjectsByHour = (subjects) => {
	return subjects.sort((a, b) => {
		const aHour = a.start.length === 3 ? `0${a.start}` : a.start;
		const bHour = b.start.length === 3 ? `0${b.start}` : b.start;

		if (aHour < bHour) {
			return -1;
		}
		if (aHour > bHour) {
			return 1;
		}
		return 0;
	});
};

module.exports = { categorize };
