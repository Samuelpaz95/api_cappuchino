import { Iprofessors } from ".";
import { Isubject } from "../../shared/interfaces";

interface Iservice {
	getAllProfessors(department: string): Promise<Iprofessors | null>;

	getProfessorSubjects(department: string, professor: string): Promise<Isubject | null>;
}

export { Iservice };
