// const rp = require('request-promise');
const puppeteer = require('puppeteer')
const $ = require('cheerio');

const scrape = async (url) => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto(url);
    await page.waitFor(6000)

    // await page.addStyleTag({content: #2018{: active}})
    for (let i=0; i <5; i++) {
        await page.click('#all-load', {delay: 3000});
        await page.click('#2018-load', {delay: 3000});
        await page.click('#2017-load', {delay: 3000});
        await page.click('#2016-load', {delay: 3000});
        await page.click('#2015-load', {delay: 3000});
        await page.click('#2014-load', {delay: 3000});
    }

    await page.waitFor(10000)
    let content = await page.content();
    const mediumUrls = new Set()
    $('.story > a.image', content).each(function() {
        let a = $(this).attr('href')
        mediumUrls.add(a)
        // console.log(a)
    })
    console.log(mediumUrls.size)

    // const result = await page.evaluate(() => {

    //     let elements = document.querySelectorAll('.story > div.info > a');

    //     for (let element of elements) {
    //         // mediumUrls.push($(`#all-story-list > div:nth-child(${i}) > div.info > a.title`)))
    //         let url = element.getAttribute('href')
    //         mediumUrls.push(url)
    //     }
    // return mediumUrls
    browser.close();
    let mediumArray = Array.from(mediumUrls)
    return mediumArray
}
// scrape("https://topmediumstories.com/")

module.exports = scrape

// scrape().then((value) => {
//     console.log(value);
// })

