const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema({
    tag: String,
    count: Number
})

const Tag = mongoose.model('ttag', TagSchema)

module.exports = Tag