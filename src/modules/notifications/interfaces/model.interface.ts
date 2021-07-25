interface Imodel {
	show(department: string): Promise<string[] | null>;
}

export { Imodel };
