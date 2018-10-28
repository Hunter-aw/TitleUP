const natural = require('natural')
const classifier = new natural.BayesClassifier();

const mongoose = require('mongoose');
const Article = require ('../models/ArticleData');

mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
})

var NGrams = natural.NGrams;

const tokenizer = new natural.WordPunctTokenizer()


Article.find({})
    .then((alldata) => {
        let obj = {}
        for (let i=0; i<2539; i++) {
            let title = alldata[i].title
            // tfidf.addDocument(title)
            // let basedArray = title.tokenizeAndStem()
            let ngram = (NGrams.trigrams(title))
            for (let gram of ngram) {
                let niceGram = gram.join(' ')
                // console.log(alldata[i].tags)
                // console.log(niceGram)
                // if (obj[niceGram]) {
                //     obj[niceGram] ++
                // }
                // else {
                //     obj[niceGram] = 1
                // }
                for (let tag of alldata[i].tags) {
                    classifier.addDocument(tag, niceGram)
                }
            // console.log(alldata[i].tags, niceGram)
            }
        }
        setTimeout(() => console.log("the ngram best for Life" + classifier.classify('Life')), 5000)
        classifier.train();
        console.log("training classifier")

        classifier.save('ngramClassifier.json', function(err, classifier){
            console.log("saved classifier")
        })
        // let arr = Object.values(obj)
        // let keys = Object.keys(obj)
        // console.log(keys)
        // for (let key of keys) {
        //     tfidf.tfidfs(key, function(i, measure) {
        //         console.log(key + ' is ' + measure);
        //     });
        // }
        // let max = Math.max(...arr)
        // console.log(max)
        
    })
