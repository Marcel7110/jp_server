const mongoose = require('mongoose')

const kanjiSchema = mongoose.Schema({
    en: String,
    grade: Number,
    jlpt: Number,
    kanji: String,
    onyomi: [String],
    kunyomi: [String]
},{collection: 'Kanji'})

module.exports = mongoose.model('Kanji',kanjiSchema)