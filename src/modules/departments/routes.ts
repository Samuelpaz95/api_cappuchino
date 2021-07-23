import controller from "./controller";
import { Router } from "express";
import fs from "fs";
import { pathDepartments } from "./utils/routes";

const router = Router();

fs.readdir(pathDepartments(), (_, files: string[]) => {
	files.forEach((department: string) => {
		const nameDepartment: string = department.toLocaleLowerCase();
		router.get(`/${nameDepartment}`, controller.getDepartmentCarrers);
		router.get(`/${nameDepartment}/:carrer`, controller.getDepartmentCarrer);
	});
});

export { router };
