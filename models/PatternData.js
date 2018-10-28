const mongoose = require('mongoose')

const patternSchema = new mongoose.Schema({
    tag: String,
    pos: String,
    word: String,
    popularity: Number  
})

const Garpattern = mongoose.model('Garpattern', patternSchema)

module.exports = Garpattern
