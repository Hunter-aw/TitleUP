const mongoose = require('mongoose');
const Pattern = require ('../models/PatternData');
const Article = require('../models/ArticleData')
const Pos = require("en-pos").Tag;
const natural = require('natural')

mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
})


let obj ={}
Article.find({})
    .then((allData) => {
         for (let data of allData) {
             for (let tag of data.tags) {
                 if (obj[tag]) {
                     obj[tag] ++
                 } else {
                     obj[tag] = 1
                 }
             }
         }
         let topTags = [] 
         for (let key in obj) {
            if (obj[key] > 14){
            topTags.push(key)}
         }
         for (let tag of toptags) {
             let pattern = new Pattern({ 
             })
         }
    }
)
    // natural.BayesClassifier.load('classifier2.json', null, function(err, classifier) {
    //     let classifiedTags = classifier.getClassifications('Life')
    //     for (let i=0; i<5; i++){
    //         tags.push(classifiedTags[i].label)
    //         console.log(tags)
    //     }
    // })