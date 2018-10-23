// const rp = require('request-promise');
const puppeteer = require('puppeteer')
const $ = require('cheerio');
const url = 'https://topmediumstories.com/';

const scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto(url);
    await page.waitFor(5000)
    // for (let i=0; i <5; i++){
    //     let year = 2018
    //     await page.addScriptTag(`#${year - i}-load`);
    for (let i=0; i <10; i++) {
        await page.click('.load-more', {delay: 1000});
    }
    // }

    await page.waitFor(15000)

    const result = await page.evaluate(() => {
        const mediumUrls = []
        let elements = document.querySelectorAll('.story > div.info > a');

        for (let element of elements) {
            // mediumUrls.push($(`#all-story-list > div:nth-child(${i}) > div.info > a.title`)))
            let url = element.getAttribute('href')
            mediumUrls.push(url)
        }
    return mediumUrls
    })
    browser.close();
    return result
}

scrape().then((value) => {
    console.log(value);
})

