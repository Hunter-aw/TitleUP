const mongoose = require('mongoose');
const Pattern = require ('../models/PatternData');
const Article = require('../models/ArticleData')
const Tag = require('../models/TagsData')
const Pos = require("en-pos").Tag;
const natural = require('natural')
const tokenizer = new natural.WordTokenizer();


mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
})

function onInsert(err, docs) {
    if (err) {
        console.log(err)
    } else { 
        console.log('1000 potatoes were successfully stored.');
    }
}
function helpMe() {
    setTimeout(onInsert, 1000)
}

Tag.find({})
    .then((allTags) => {
        // console.log(allTags)
        let num = 0
        for (let data of allTags) {
            let wordCount = {}
            let wordPos = {}
            let wordPop = {}
            Article.find({tags: data.tag}) //mongoose arary includes
                .then((genreData) => {
                    console.log("---------------BREAK--------------")
                    for(let article of genreData) {
                        // console.log(article)
                        let betterTitle = article.title.replace(/[.,!]/g, '');
                        let tokenedTitle = tokenizer.tokenize(betterTitle.toLowerCase())
                        let posTitle = new Pos(tokenedTitle).initial().smooth().tags;
                        for (let index in tokenedTitle) {
                            let word = tokenedTitle[index]
                            if (wordCount[word]) {
                                wordCount[word] ++;
                                wordPop[word] += article.claps
                            } else {
                                wordCount[word] = 1
                                wordPos[word] = posTitle[index]
                                wordPop[word] = article.claps
                            }
                        }
                    }
                let wordMax = 0
                let popMax = 0
                for (let word in wordCount) {
                    if (wordCount[word] > wordMax) wordMax = wordCount[word]
                }
                for (let word in wordPop) {
                    if (wordPop[word] > popMax) popMax = wordPop[word]
                }
                for (let word in wordPop) {
                    wordPop[word] = (wordPop[word]/popMax)+(wordCount[word]/wordMax)
                    // console.log(word, wordPop[word])
                }
                let wordDataArray = []
                for (let word in wordPos) {
                        let wordData = {
                            tag: data.tag,
                            pos: wordPos[word],
                            word: word,
                            popularity: wordPop[word]   
                        }
                        console.log('HERE')
                        wordDataArray.push(wordData)
                    }
                Pattern.collection.insertMany(wordDataArray, helpMe)
            })
        }
    })



//Add genre's to DB

// let obj ={}
// Article.find({})
//     .then((allData) => {
//         for (let data of allData) {
//             for (let tag of data.tags) {
//                 if (obj[tag]) {
//                     obj[tag] ++
//                 } else {
//                     obj[tag] = 1
//                 }
//             }
//         } 
//         for (let key in obj) {
//            let newTag = new Tag({
//                tag: key,
//                count: obj[key]
//            })
//         newTag.save()
//         }
//     }
// )
// List of genres,
// patterns
// I need 1 genre, 1 pos, list of word and popularity
// so if i search articles by genre genre
// run through each title 
// tokenize and POS-ize
// save an OBJ with word in key, an array of pos? then the array.length is my count? (or i just take one  pos but i still have the problem)
// i can run through each key in an obj... and then save the pop score as a separate function.
    // natural.BayesClassifier.load('classifier2.json', null, function(err, classifier) {
    //     let classifiedTags = classifier.getClassifications('Life')
    //     for (let i=0; i<5; i++){
    //         tags.push(classifiedTags[i].label)
    //         console.log(tags)
    //     }
    // })