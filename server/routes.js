const express = require('express')
const natural = require('natural')
// const brain = require('brain.js')
// var BrainJSClassifier = require('natural-brain');
// var classifier = new BrainJSClassifier();
const router = express.Router()
// const classifier = new natural.BayesClassifier();

// const mongoose = require('mongoose');
// const Article = require ('../models/ArticleData');

// mongoose.connect('mongodb://localhost/medium', function() {
//   console.log("DB connection established!!!");
// })

router.get('/search/:query', (req, res) => {
    console.log("I'm here bitches")
    let tags = []
    let query = req.params.query
    natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
        let classifiedTags = classifier.getClassifications(query)
        for (let i=0; i<5; i++){
            tags.push(classifiedTags[i].label)
            console.log(tags)
        }
        res.send(tags)
    })
})

// let str = 'Digital Exile: How I Got Banned for Life from AirBnB'
// const tokenizer = new natural.WordPunctTokenizer()


// let tokenized = tokenizer.tokenize(str)
// console.log(tokenized)

// for (let word of tokenized) {
//     console.log(natural.PorterStemmer.stem(word))
// }

// const obj = {}
// Article.find({})
//     .then((allData) => {
//         for (let data of allData) {
//             // console.log(data)
//             for (let tag of data.tags) {
//             //     if (obj[tag]) {
//             //         obj[tag] += 1
//             //     }
//             //     else {obj[tag] = 1}
//                 classifier.addDocument(data.title, tag)
//                 // console.log(data.title + ", " + tag)
//             }
//         }
//         // console.log(obj)
//         classifier.train();
//         console.log("training classifier")
//         setTimeout(() => console.log("this article is about " + classifier.classify('Why you should quit your job')), 5000)
//         classifier.save('classifier.json', function(err, classifier){
//             console.log("saved classifier")
//         })
//     }) 

// natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
//     console.log(classifier.getClassifications('how to grow a dope garden')[0].label, 
//                 classifier.getClassifications('how to grow a dope garden')[1].label, 
//                 classifier.getClassifications('how to grow a dope garden')[2].label, 
//                 classifier.getClassifications('how to grow a dope garden')[3].label, 
//                 classifier.getClassifications('how to grow a dope garden')[4].label)
// })
            // for (let tag of data.tags) {
            //     if (obj[tag]) {
            //         obj[tag] += 1
            //     }
            //     else {obj[tag] = 1}

module.exports = router


