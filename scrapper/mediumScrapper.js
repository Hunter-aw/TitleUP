const rp = require('request-promise');
// const puppeteer = require('puppeteer')
const $ = require('cheerio');
const numeral = require('numeral')

const mediumScrapper = (url) => {
    return rp(url)
        .then((html) => {
            let tags = []
            $('.tags', html).children().each(function() {
                tags.push($(this).text());
            })
            let claps = numeral($('.js-multirecommendCountButton', html)
                            .first().text())._value *1000
            let readingTime = numeral($('.readingTime', html).attr('title'))._value
            let data = {
                url: url,
                title: $('.graf--title', html).text(),
                readingTime: readingTime,
                claps: claps,
                tags: tags
            }
            // console.log(data)
            if (data.claps === 0) return null
            else return data
        })
}

module.exports = mediumScrapper