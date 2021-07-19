import controller from "./controller";
import { Router } from "express";
import fs from "fs";

const router = Router();

fs.readdir("./public/data", (_, files: string[]) => {
	files.forEach((department: string) => {
		const nameDepartment: string = department.toLocaleLowerCase();
		router.get(`/${nameDepartment}`, controller.get);
		router.get(`/${nameDepartment}/:carrer`, controller.show);
	});
});

export { router };
