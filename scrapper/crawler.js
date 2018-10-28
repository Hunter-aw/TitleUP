const mongoose = require('mongoose');
const Garticle = require ('../models/ArticleData');
// const topStoresScrapper = require('./topStoriesScrapper');
const mediumScrapper = require('./mediumScrapper');
const staticScrapper = require('./staticScrapper')

mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
//   new Article({url: 'hunter.com', title: 'hunter', readingTime: 5, claps: 10000, tags: ['help', 'me']}).save()
})
// const createData = (data) => new Article(data).save()

// topStoresScrapper('https://topmediumstories.com/')
staticScrapper()
    .then((posts) => {
        return Promise.all(
            posts.map((url => {
                return mediumScrapper(url)
            }))
            //     return new Article(mediumScrapper(url)).save()
            )
    })
    .then((arrayedData) => {
        console.log(arrayedData.length)
        for (let data of arrayedData) {
            console.log(data)
            if (data) {
                const { url, title, readingTime, claps, tags} = data
                let articleData = new Garticle({
                    url: url,
                    title: title,
                    readingTime: readingTime,
                    claps: claps,
                    tags: tags
                })
            articleData.save().then(() => console.log('saved'))
        }}
    })  
    .catch((err) => {
        console.log(err)
    });