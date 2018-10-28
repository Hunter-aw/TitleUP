const cheerio = require('cheerio');
const numeral = require('numeral')
const fs = require('fs');

const staticScrape = async () => {
    const $2018 = await cheerio.load(fs.readFileSync('/home/elhunto77/Desktop/Top_Medium_Stories_2018.html'))
    const $2017 = await cheerio.load(fs.readFileSync('/home/elhunto77/Desktop/Top_Medium_Stories_2017.html'))
    const $2016 = await cheerio.load(fs.readFileSync('/home/elhunto77/Desktop/Top_Medium_Stories_2016.html'))
    const $2015 = await cheerio.load(fs.readFileSync('/home/elhunto77/Desktop/Top_Medium_Stories_2015.html'))
    const $2014 = await cheerio.load(fs.readFileSync('/home/elhunto77/Desktop/Top_Medium_Stories_2014.html'))
    const $2013 = await cheerio.load(fs.readFileSync('/home/elhunto77/Desktop/Top_Medium_Stories_2013.html'))
    const mediumUrls = new Set()
    $2018('.story > a.image').each(function() {
        let a = $2018(this).attr('href')
        mediumUrls.add(a)
        // console.log(a)
    })
    console.log(mediumUrls.size)
    $2017('.story > a.image').each(function() {
        let a = $2017(this).attr('href')
        mediumUrls.add(a)
        // console.log(a)
    })
    console.log(mediumUrls.size)
    $2016('.story > a.image').each(function() {
        let a = $2016(this).attr('href')
        mediumUrls.add(a)
        // console.log(a)
    })
    console.log(mediumUrls.size)
    $2015('.story > a.image').each(function() {
        let a = $2015(this).attr('href')
        mediumUrls.add(a)
        // console.log(a)
    })
    console.log(mediumUrls.size)
    $2014('.story > a.image').each(function() {
        let a = $2014(this).attr('href')
        mediumUrls.add(a)
        // console.log(a)
    })
    console.log(mediumUrls.size)
    $2013('.story > a.image').each(function() {
        let a = $2013(this).attr('href')
        mediumUrls.add(a)
        // console.log(a)
    })
    console.log(mediumUrls.size)
    let mediumArray = await Array.from(mediumUrls)
    return mediumArray
}
// staticScrape()

module.exports = staticScrape


