const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    url: String,
    title: String,
    readingTime: Number,
    claps: Number,
    tags: Array
})

const Article = mongoose.model('barticle', articleSchema)

module.exports = Article