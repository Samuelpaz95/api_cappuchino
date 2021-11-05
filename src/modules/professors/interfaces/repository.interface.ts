import { ImapProfessors, Iprofessors } from ".";

interface Irepository {
	getAllProfessors(department: string): Promise<Iprofessors | null>;

	getProfessorSubjects(department: string): Promise<ImapProfessors | null>;
}

export { Irepository };
