const mongoose = require('mongoose');
const Article = require ('./models/ArticleData');
const Pos = require("en-pos").Tag;
const natural = require('natural')

const classifier = new natural.BayesClassifier();


mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
})

var tokenizer = new natural.WordTokenizer();

Article.find({})
    .then((alldata) => {
        let obj = {}
        for (let i=0; i<362; i++) {
            let title = alldata[i].title
            let basedArray = tokenizer.tokenize(title)
            let poses = new Pos(basedArray).initial().smooth().tags;

            for (let tag of alldata[i].tags) {
                classifier.addDocument(tag, poses)
                console.log(`added ${i} patterns to the doc`)
            }
        }
        classifier.train();
        console.log("training classifier")
        setTimeout(() => console.log("the pattern best for Life" + classifier.classify('Life')), 5000)
        classifier.save('pattern_classifier.json', function(err, classifier){
            console.log("saved classifier")
        })
    })

    