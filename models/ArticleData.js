const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    url: String,
    title: String,
    readingTime: Number,
    claps: Number,
    tags: Array
})

const Garticle = mongoose.model('garticle', articleSchema)

module.exports = Garticle