function getBaseUrl(route: string): string {
	route = route.slice(1);
	const index = route.indexOf("/");
	if (index > 0) {
		return route.slice(0, index);
	}

	return route;
}

const pathDepartments: string = "./public/data/departments";

export { getBaseUrl, pathDepartments };
