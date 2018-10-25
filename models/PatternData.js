const mongoose = require('mongoose')

const patternSchema = new mongoose.Schema({
    tag: String,
    pos: String,
    words: Object
})

const Pattern = mongoose.model('pattern', patternSchema)

module.exports = Pattern
