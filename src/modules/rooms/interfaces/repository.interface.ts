import { Irooms } from "./app.interface";

interface Irepository {
	getAllRoomsByDepartment(department: string): Promise<Irooms | null>;
}

export { Irepository };
