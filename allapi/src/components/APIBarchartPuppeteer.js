
const { type } = require('express/lib/response');
const Puppeteer = require('puppeteer');

const myDatasTrated = () => {

    (async () => {
        const browser = await Puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://www.barchart.com/futures/quotes/CTK20/futures-prices');

        const myDatasTrated = page.evaluate(async () => {
            /*  const THEADBarchart = await document.querySelectorAll("th")
              let THEADBarchartArray = []
              for (let indexTHEAD = 0; indexTHEAD < THEADBarchart.length; indexTHEAD++) {
                  const elementsTHEADBarchart = THEADBarchart[indexTHEAD].textContent
                  THEADBarchartArray.push(elementsTHEADBarchart)
              }*/

            const TBODYBarchart = await document.querySelectorAll("tr")
            let TBODYBarchartArray = []
            for (let indexBODY = 0; indexBODY < TBODYBarchart.length; indexBODY++) {
                const elementsBODYBarchart = TBODYBarchart[indexBODY].textContent
                const elementsBODYBarchartClean = elementsBODYBarchart.replace(/(\r\n|\n|\r)/gm, " ")
               const elementsBODYBarchartSpliting = elementsBODYBarchartClean.replace(/\s{2,}/g, ' ')
               const elementsBODYBarchartSplitingMore = elementsBODYBarchartSpliting.split(" ")
                TBODYBarchartArray.push(elementsBODYBarchartSpliting)
                console.log(TBODYBarchartArray[0])

            }
            return TBODYBarchart
        })

        return myDatasTrated

        //  await browser.close()
    })()
}

myDatasTrated()