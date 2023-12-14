const Vocab = require('../models/Vocab')

const getVocabList = async (req,res) => {
    const {theme} = req.params

    const list = await Vocab.find({theme})
    if(!list || list.length == 0){
        return res.status(400).json({msg: "Couldn't fetch vocab"})
    }

    res.status(200).json(list[0].vocab)
}

const getVocabNamesList = async (req,res) => {
    const names = await Vocab.aggregate([{
        $project: {
            theme: "$theme",
            amount: {$size: "$vocab"}
        }
    }])

    if(!names || names.length == 0){
        return res.status(400).json({msg: "Coudln't fetch names"})
    }

    res.status(200).json(names)
}

module.exports = { getVocabList, getVocabNamesList }