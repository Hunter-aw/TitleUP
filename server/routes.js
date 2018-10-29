const express = require('express')
const natural = require('natural')
const Garpattern = require('../models/PatternData')
const mongoose = require('mongoose')
const Pos = require("en-pos").Tag;

const router = express.Router()

mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
})


router.get('/search/:query', (req, res) => {
    console.log("I'm here bitches")
    let tags = []
    let query = req.params.query
    natural.BayesClassifier.load('/home/elhunto77/Repositories/TitleUP/title_up/classifier/fullClassifier.json',
                                 null, function(err, classifier) {
        let classifiedTags = classifier.getClassifications(query)
        for (let i=0; i<5; i++){
            tags.push(classifiedTags[i].label)
            console.log(tags)
        }
        res.send(tags)
    })
})

router.get('/genTitle/:genre', async (req, res) => {
    console.log("I'm here biches")
    natural.BayesClassifier.load('/home/elhunto77/Repositories/TitleUP/title_up/classifier/full_pattern_classifier.json',
                                null, async (err, classifier) => {
        let generatedArray = []
        let posPattern = await classifier.classify(req.params.genre).split(",")
        console.log(req.params.genre)
        await Promise.all (posPattern.map(async (pos) => {
            console.log(pos)
            const wordData = await Garpattern.find({pos: pos, tag: req.params.genre})
                                    .sort({popularity: -1})
                let wordDataArray = []
                wordData.map(async (data) => {
                    await wordDataArray.push(data.word*(Math.floor(data.score*100)))
                })
                let randomIndex = await Math.floor(Math.random() *wordDataArray.length)
                console.log(randomIndex)
                let word = wordData[randomIndex].word
                generatedArray.push(word)
            }))
        let genSentence = await generatedArray.join(" ")
        console.log(genSentence)
        res.send(genSentence)
    })
})

router.get('/ngrams/:genre', (req, res) => {
    console.log("I'm here bitches")
    let ngrams = []
    let genre = req.params.genre
    natural.BayesClassifier.load('/home/elhunto77/Repositories/TitleUP/title_up/classifier/ngramClassifier.json',
                                 null, function(err, classifier) {
        let classifiedNgrams = classifier.getClassifications(genre)
        for (let i=0; i<5; i++){
            ngrams.push(classifiedNgrams[i].label)
            console.log(ngrams)
        }
        res.send(ngrams)
    })
})


module.exports = router


