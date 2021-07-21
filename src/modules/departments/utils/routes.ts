import path from "path";

function getBaseUrl(route: string): string {
	route = route.slice(1);
	const index = route.indexOf("/");
	if (index > 0) {
		return route.slice(0, index);
	}

	return route;
}

const pathDepartments = (filesPath: string = ""): string =>
	path.resolve("./public/data/departments" + filesPath);

export { getBaseUrl, pathDepartments };
