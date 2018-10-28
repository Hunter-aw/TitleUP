const mongoose = require('mongoose');
const Garticle = require ('../models/ArticleData');
const Pos = require("en-pos").Tag;
const natural = require('natural')

const classifier = new natural.BayesClassifier();


mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
})

var tokenizer = new natural.WordTokenizer();

Garticle.find({})
    .then((alldata) => {
        let obj = {}
        for (let i=0; i<2539; i++) {
            let title = alldata[i].title
            let basedArray = tokenizer.tokenize(title)
            let poses = new Pos(basedArray).initial().smooth().tags;

            for (let tag of alldata[i].tags) {
                classifier.addDocument(tag, poses)
                console.log(`added ${i} patterns to the doc`)
            }
        }
        setTimeout(() => console.log("the pattern best for Life" + classifier.classify('Life')), 5000)
        classifier.train();
        console.log("training classifier")

        classifier.save('full_pattern_classifier.json', function(err, classifier){
            console.log("saved classifier")
        })
    })

    