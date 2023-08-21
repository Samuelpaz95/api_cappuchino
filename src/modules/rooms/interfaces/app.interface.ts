import { Isubject } from "src/modules/shared/interfaces";

interface Iroom extends Array<Isubject> {}

interface Irooms {
	[key: string]: Iroom;
}

export { Iroom, Irooms };
