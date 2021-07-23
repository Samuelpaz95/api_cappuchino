import { IdepartementCarrer, Icarrer, Idepartment } from "./app.interface";

interface Irepository {
	getDepartmentCarrer(
		department: string,
		IndexCarrer: IdepartementCarrer
	): Promise<Icarrer | null>;

	getIndexCarrerByDepartment(
		department: string,
		nameCarrer: string
	): Promise<IdepartementCarrer | null>;

	getDepartmentCarrers(department: string): Promise<IdepartementCarrer[] | null>;

	getDepartments(): Promise<Idepartment[]>;
}

export { Irepository };
