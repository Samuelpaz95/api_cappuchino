import path from "path";

const pathDepartments = (filesPath: string = ""): string =>
	path.resolve("./public/data/departments" + filesPath);

export { pathDepartments };
