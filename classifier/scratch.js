const mongoose = require('mongoose');
const Garticle = require ('../models/ArticleData');
// const topStoresScrapper = require('./topStoriesScrapper');
// const mediumScrapper = require('./mediumScrapper');
// const staticScrapper = require('./staticScrapper')
const Tag = require('../models/TagsData')

mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
//   new Article({url: 'hunter.com', title: 'hunter', readingTime: 5, claps: 10000, tags: ['help', 'me']}).save()
})

Garticle.find({})
    .then((allData) => {
        let obj ={}
        for (let data of allData) {
            // console.log(data)
            for (let tag of data.tags) {
                if (obj[tag]) {
                    obj[tag] ++
                } else {
                    obj[tag] = 1
                }
            } 
            console.log(obj)

        }
        for (let tag in obj) {
            let boop = new Tag({
                tag: tag,
                count: obj[tag]
            })
            boop.save()
        }
    })