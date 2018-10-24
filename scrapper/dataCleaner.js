const mongoose = require('mongoose');
const Article = require ('../models/ArticleData');

mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
})
const obj = {}
Article.find({})
    .then((data) => {
        for(let single of data) {
            if (obj[single.title]) {
                obj[single.title] += 1
            }
            else obj[single.title] = 1
        }
        })
        .then(() => {
            for (let key in obj) {
                if (obj[key] >1) {
                    Article.findOneAndRemove({title: key})
                    .then(() => {
                        console.log("removed one")
                    })
                }
            }
    })