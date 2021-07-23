interface IcarrerOfDepartement {
	code: string;
	semanticUrl: string;
	name: string;
	madeIn: string;
	semester: string;
}

interface Icarrer {
	levels: {
		code: string;
		subjects: {
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
		}[];
	}[];
}

interface Idepartment {
	semanticName: string;
	name: string;
	madeIn: string;
}

export { IcarrerOfDepartement, Icarrer, Idepartment };
