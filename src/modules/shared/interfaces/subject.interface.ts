interface Isubject {
	code: string;
	name: string;
	groups: {
		code: string;
		schedule: {
			day: string;
			start: string;
			end: string;
			duration: number;
			room: string;
			teacher: string;
			isClass: boolean;
		}[];
	}[];
}

export { Isubject };
