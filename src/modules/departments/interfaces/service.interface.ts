import { Icarrer, IdepartementCarrer, Idepartment } from "./app.interface";

interface Iservice {
	getDepartments(): Promise<Idepartment[]>;

	getDepartmentCarrer(department: string, carrer: string): Promise<Icarrer | null>;

	getDepartmentCarrers(department: string): Promise<IdepartementCarrer[] | null>;
}

export { Iservice };
