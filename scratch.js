const natural = require('natural')


const mongoose = require('mongoose');
const Article = require ('./models/ArticleData');

mongoose.connect('mongodb://localhost/medium', function() {
  console.log("DB connection established!!!");
})

var NGrams = natural.NGrams;

const tokenizer = new natural.WordPunctTokenizer()

natural.LancasterStemmer.attach();

var TfIdf = natural.TfIdf;
var tfidf = new TfIdf();


Article.find({})
    .then((alldata) => {
        let obj = {}
        for (let i=0; i<50; i++) {
            let title = alldata[i].title
            tfidf.addDocument(title)
            // let basedArray = title.tokenizeAndStem()
            let ngram = (NGrams.bigrams(title))
            for (let gram of ngram) {
                let niceGram = gram.join(' ')
                // console.log(niceGram)
                if (obj[niceGram]) {
                    obj[niceGram] ++
                }
                else {
                    obj[niceGram] = 1
                }
            }
        }
        let arr = Object.values(obj)
        let keys = Object.keys(obj)
        console.log(keys)
        for (let key of keys) {
            tfidf.tfidfs(key, function(i, measure) {
                console.log(key + ' is ' + measure);
            });
        }
        let max = Math.max(...arr)
        console.log(max)
        
    })
