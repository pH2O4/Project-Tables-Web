const express = require("express");
const Puppeteer = require('puppeteer');
const cors = require('cors');
const { ConsoleMessage } = require("puppeteer");
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get("/GettingDatasBarchart", async (req, res) => {


    const browser = await Puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.barchart.com/futures/quotes/CTK20/futures-prices');

    const GetingDatas = await page.evaluate(async () => {

        const TBODYBarchart = await document.querySelectorAll("tr")
        let TBODYBarchartArray = []
        for (let indexBODY = 0; indexBODY < TBODYBarchart.length; indexBODY++) {
            const elementsBODYBarchart = TBODYBarchart[indexBODY].textContent
            const elementsBODYBarchartClean = elementsBODYBarchart.replace(/(\r\n|\n|\r)/gm, " ")
            const elementsBODYBarchartSpliting = elementsBODYBarchartClean.replace(/\s{2,}/g, ' ')
            const elementsBODYBarchartSplitingMore = elementsBODYBarchartSpliting.split(" ")
            TBODYBarchartArray.push(elementsBODYBarchartSplitingMore)
        }
        const JsonTBODYBarchartArray = JSON.stringify(TBODYBarchartArray)
        return (JsonTBODYBarchartArray)

    })

    res.send(GetingDatas)
    await browser.close()

});

app.get("/GettingDatasCmegroup", async (req, res) => {
    const browser = await Puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.cmegroup.com/markets/agriculture/oilseeds/soybean.quotes.html');

    const GetingDatas = await page.evaluate(async () => {

        const TBODYCmegroup = await document.querySelectorAll("tr")
        let TBODYCmegroupArray = []
        for (let indexTD = 0; indexTD < TBODYCmegroup.length; indexTD++) {
            const GetingTDSBYArray = await TBODYCmegroup[indexTD]
            const GetingTDSBYArrayContinue = await GetingTDSBYArray.querySelectorAll("td")

            const ForInside = ( GetingTDSBYArrayContinue) => {
                let ArrayForFluxe = []
                for (let index = 0; index < GetingTDSBYArrayContinue.length; index++) {
                    const elementFROMGetingTDSBYArrayContinue = GetingTDSBYArrayContinue[index].textContent
                    ArrayForFluxe.push(elementFROMGetingTDSBYArrayContinue)

                }
                return (ArrayForFluxe)
            }
            TBODYCmegroupArray.push(ForInside(GetingTDSBYArrayContinue))
            console.log(GetingTDSBYArrayContinue)
        }
        /*   const TBODYCmegroupFirst = await document.querySelectorAll("tr")[1]
           const TBODYCmegroupFirstGeting = await TBODYCmegroupFirst.querySelectorAll("td")
           
           for (let indexBODY = 0; indexBODY < TBODYCmegroup.length; indexBODY++) {
               const elementsBODYCmegroup = TBODYCmegroup[indexBODY].textContent
               const elementsBODYCmegroupClean = elementsBODYCmegroup.replace(/'/g, ",")
               TBODYCmegroupArray.push(elementsBODYCmegroup)
           }*/
        console.log(TBODYCmegroupArray)
        return (TBODYCmegroupArray)

    })

    res.send(GetingDatas)
    // await browser.close()

});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})