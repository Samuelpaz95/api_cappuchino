interface Iservice {
	takeScreenshotInBase64(contentTableHtml: string, cssVariables: string): Promise<any>;
}

export { Iservice };
