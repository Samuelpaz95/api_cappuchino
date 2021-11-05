import { Isubject } from "../shared/interfaces";
import { Iprofessors, Irepository, Iservice } from "./interfaces";

class Service implements Iservice {
	private repository: Irepository;

	constructor(repository: Irepository) {
		this.repository = repository;
	}

	getAllProfessors(department: string): Promise<Iprofessors | null> {
		return this.repository.getAllProfessors(department);
	}

	async getProfessorSubjects(
		department: string,
		professor: string
	): Promise<Isubject | null> {
		const professorSubjects = await this.repository.getProfessorSubjects(department);
		if (professorSubjects == null) return null;
		const formatedProfessor = decodeURI(professor.toLocaleUpperCase());
		return professorSubjects[formatedProfessor] || null;
	}
}

export default Service;
