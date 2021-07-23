interface Irepository {
	getMessageByDepartment(department: string): Promise<string[] | null>;
	getGerneralMessage(): Promise<string[] | null>;
}

export { Irepository };
