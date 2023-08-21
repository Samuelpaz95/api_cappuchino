import { Irooms } from "./app.interface";

interface Iservice {
	getAllRoomsByDepartment(department: string): Promise<Irooms>;
}

export { Iservice };
