require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bp = require('body-parser')

const app = express()

const vocabRouter = require('./router/vocab')
const kanjiRouter = require('./router/kanji')


//middleware
app.use(cors())
app.use(bp.json())


//routes
app.use('/vocab',vocabRouter)
app.use('/kanji',kanjiRouter)


//conneciton
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(4000,() => {
        console.log('connected to db on 4000')
    })
}).catch((err) => {
    console.log(err)
})