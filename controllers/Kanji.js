const Kanji =  require('../models/Kanji')

const getAllKanjiByGrade = async(req,res) => {
    const { grade } = req.params

    const kanjis = await Kanji.find({grade})
    if(!kanjis || kanjis.length == 0){
        return res.status(400).json({msg: "Couldn't fetch kanji"})
    }

    res.status(200).json(kanjis)
}

const getRandomKanji = async(req,res) => {
    try{
        const count = await Kanji.find().count()
        const random = Math.floor(Math.random() * count)
    
        const kanji = await Kanji.findOne().skip(random)

        res.status(200).json(kanji)
    }catch(err){
        return res.status(400).json({error: "Something went wrong, Couldn't fetch random kanji"})
    }
}

module.exports = { getAllKanjiByGrade, getRandomKanji }