const express = require("express");
const Puppeteer = require('puppeteer');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get("/GettingDatas", async (req, res) => {


    const browser = await Puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.barchart.com/futures/quotes/CTK20/futures-prices');

    page.evaluate(async () => {
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
            TBODYBarchartArray.push(elementsBODYBarchartSplitingMore)

        }
        res.send(TBODYBarchartArray)
    })

    await browser.close()

});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})