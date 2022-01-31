import puppeteer from "puppeteer";

const SELECTOR = "hola";

export const takeScreenshotPuppeteer = async (
	scheduleTableHtml: string,
	cssVariables: string
) => {
	const browser = await puppeteer.launch({
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	});
	const page = await browser.newPage();
	await page.setViewport({
		width: 1500,
		height: 1000,
		deviceScaleFactor: 1,
	});
	await page.setContent(`
    <html>
        <style>
            <link 
                href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap" 
                rel="stylesheet"
            >
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

            * {
                box-sizing: border-box;
            }

            body {
                ${cssVariables}
                margin: 0;
                color: var(--font-color);
                line-height: 37px;
                font-family: "Open Sans", sans-serif;
            }

            table caption {
                display: none
            }

            h1, h2, h3, h4, h5, h6, caption {
                font-family: "Allerta Stencil", sans-serif;
            }

            .schedule-table {
                font-size: 12px;
                background-color: var(--primary-color);
                display: flex;
                overflow-x: auto;
            }
        
            .schedule-table__table {
                border-collapse: collapse;
                margin: 1rem;
                width: 100%;
            }

            .schedule-table-header__title {
                text-align: left;
                font-size: 1.4rem;
                margin-bottom: 1.6rem;
            }

            .schedule-table-header__title h3 {
                font-weight: 100;
                margin: 0;
            }

            .schedule-table-header__header th,
            .schedule-table-header__header td {
                border: 1px solid var(--secondary-color);
                //  border-top: none;
                text-align: center;
                min-width: 50px;
            }

            .schedule-table-header__content {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
    
            .schedule-table-header__icons {
                margin-right: 1rem;
            }

            .button-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: inherit;
                border: none;
                color: inherit;
            }

            //  .schedule-table-header__header th:first-child {
            //      border-left: none;
            //  }

            //  .schedule-table-header__header th:last-child {
            //      border-right: none;
            //  }

            .schedule-table-body th,
            .schedule-table-body td {
                border: 1px solid var(--secondary-color);
                text-align: center;
            }
        
            //  .schedule-table-body tr:first-child {
            //      border-left: none;
            //  }
        
            //  .schedule-table-body tr:last-child {
            //      border-right: none;
            //  }
        
            //  .schedule-table-body:last-child td {
            //      border-bottom: none;
            //  }

            .schedule-item {
                font-size: 1em;
                line-height: 16px;
                // font-weight: 700;
                color: initial;
                padding: 0.5rem;
            }
        
            .schedule-item__conflictive {
                background: transparent;
                color: var(--secondary-color);
                font-weight: 700;
            }
            
        </style>
        <body>
            <div id='hola'>
                ${scheduleTableHtml}
            </div>
        </body>
    </html>
 `);

	const rect = await page.evaluate((selector) => {
		const element = document.getElementById(selector) || document.createElement("div");
		const { width, height } = element.getBoundingClientRect();
		return { height, width };
	}, SELECTOR);

	const image = await page.screenshot({
		type: "jpeg",
		quality: 100,
		clip: { x: 0, y: 0, height: rect.height || 1, width: rect.width || 1 },
	});
	await browser.close();

	return image;
};
