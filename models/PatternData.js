const mongoose = require('mongoose')

const patternSchema = new mongoose.Schema({
    tag: String,
    pos: String,
    word: String,
    popularity: Number  
})

const Pattern = mongoose.model('pattern', patternSchema)

module.exports = Pattern
