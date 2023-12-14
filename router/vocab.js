const router = require('express').Router()
const vocabController = require('../controllers/Vocab')

router.get('/list', vocabController.getVocabNamesList)

router.get('/collection/:theme', vocabController.getVocabList)

module.exports = router