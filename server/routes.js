const express = require('express')
const natural = require('natural')

const router = express.Router()


router.get('/search/:query', (req, res) => {
    console.log("I'm here bitches")
    let tags = []
    let query = req.params.query
    natural.BayesClassifier.load('classifier2.json', null, function(err, classifier) {
        let classifiedTags = classifier.getClassifications(query)
        for (let i=0; i<5; i++){
            tags.push(classifiedTags[i].label)
            console.log(tags)
        }
        res.send(tags)
    })
})


module.exports = router


