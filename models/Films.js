const mongoose = require('mongoose')

const FilmsSchema = new mongoose.Schema({
    filmName: {
        type: String,
        required: true,
    },
    googleID:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Films',FilmsSchema)