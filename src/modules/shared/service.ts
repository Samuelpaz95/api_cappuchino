import { sharedService } from "./interfaces";
import { takeScreenshotPuppeteer } from "./libraries/puppeterScreenshotTable";

class Service implements sharedService {
	takeScreenshotInBase64 = async (contentTableHtml: string): Promise<any> => {
		return (await takeScreenshotPuppeteer(contentTableHtml)).toString("base64");
	};
}

export default Service;
