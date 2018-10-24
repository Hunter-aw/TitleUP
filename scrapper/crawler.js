const mongoose = require('mongoose');
const Article = require ('../models/ArticleData');
const topStoresScrapper = require('./topStoriesScrapper');
const mediumScrapper = require('./mediumScrapper');

mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
//   new Article({url: 'hunter.com', title: 'hunter', readingTime: 5, claps: 10000, tags: ['help', 'me']}).save()
})
// const createData = (data) => new Article(data).save()

topStoresScrapper('https://topmediumstories.com/')
    .then((posts) => {
        return Promise.all(
            posts.map((url => {
                return mediumScrapper(url)
            }))
            //     return new Article(mediumScrapper(url)).save()
            )
    })
    // .then((arrayedData) => {
    //     for (let data of arrayedData) {
    //         console.log(data)
    //         if (data) {
    //             const { url, title, readingTime, claps, tags} = data
    //             let articleData = new Article({
    //                 url: url,
    //                 title: title,
    //                 readingTime: readingTime,
    //                 claps: claps,
    //                 tags: tags
    //             })
    //         articleData.save()
    //     }}
    // })  
    // .catch((err) => {
    //     console.log(err)
    // });