import controller from "./controller";
import { Router } from "express";
import fs from "fs";

const router = Router();

router.get(`/department/:carrer`, controller.show);

fs.readdir("./public/data", (_, files: string[]) => {
	files.forEach((file: string) => {
		router.get(`/${file.toLocaleLowerCase()}`, controller.get);
	});
});

export { router };
