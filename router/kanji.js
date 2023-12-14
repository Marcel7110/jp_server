const router = require('express').Router()
const kanjiController = require('../controllers/Kanji')

router.get('/list/:grade', kanjiController.getAllKanjiByGrade)
router.get('/random', kanjiController.getRandomKanji)

module.exports = router