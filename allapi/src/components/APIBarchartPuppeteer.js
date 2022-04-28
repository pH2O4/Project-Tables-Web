
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
                console.log( THEADBarchartArray)
            }

            const TBODYBarchart = await document.querySelectorAll("tr")
            let TBODYBarchartArray = []
            for (let indexBODY = 0; indexBODY < TBODYBarchart.length; indexBODY++) {
                const elementsBODYBarchart = THEADBarchart[indexBODY].textContent
                console.log(elementsBODYBarchart, indexBODY)
                TBODYBarchartArray.push(elementsBODYBarchart)
                console.log(TBODYBarchartArray)
            }
            return THEADBarchart, TBODYBarchart
        })

        return myDatasTrated


       //  await browser.close()
    })()
}

myDatasTrated()