import { Isubject } from "../../shared/interfaces";

type Iprofessors = string[];

interface ImapProfessors {
	[professor: string]: Isubject;
}

export { Iprofessors, ImapProfessors };
