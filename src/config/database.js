const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')

const url = process.env.CONNECTIONSTRING
mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })

module.exports = mongoose
