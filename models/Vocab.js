const mongoose = require('mongoose')

const vocabSchema = mongoose.Schema({
    theme: String,
    theme_pl: String,
    vocab: [{
        en: String,
        pl: String,
        jp: String,
        kanji: String,
        furigana: String
    }]
},{collection: 'Vocab'})

module.exports = mongoose.model('Vocab',vocabSchema)