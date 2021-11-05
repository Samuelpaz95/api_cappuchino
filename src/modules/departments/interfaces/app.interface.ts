import { Isubject } from "../../shared/interfaces";

interface IdepartementCarrer {
	code: string;
	semanticName: string;
	name: string;
	madeIn: string;
	semester: string;
}

interface Icarrer {
	levels: {
		code: string;
		subjects: Isubject[];
	}[];
}

interface Idepartment {
	semanticName: string;
	name: string;
	madeIn: string;
}

export { IdepartementCarrer, Icarrer, Idepartment };
