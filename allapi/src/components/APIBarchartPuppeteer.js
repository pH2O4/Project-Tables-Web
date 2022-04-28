
const Puppeteer = require('puppeteer');

const myDatasTrated = () => {
    
    (async () => {
        const browser = await Puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://www.barchart.com/futures/quotes/CTK20/futures-prices');

        const myDatasTrated =  page.evaluate( async () => {
            const THEADBarchart = await document.querySelectorAll("th")
            let THEADBarchartArray = []
            for (let indexTHEAD = 0; indexTHEAD < THEADBarchart.length; indexTHEAD++) {
                const elementsTHEADBarchart = THEADBarchart[indexTHEAD].textContent
                console.log(elementsTHEADBarchart, indexTHEAD)
                THEADBarchartArray.push(elementsTHEADBarchart)
                console.log(THEADBarchart)
            }

            const TBODYBarchart = await document.querySelectorAll("tr")

            return THEADBarchart, TBODYBarchart
        })

        return myDatasTrated


       //  await browser.close()
    })()
}

myDatasTrated()