const mongoose = require('mongoose')

const FilmsSchema = new mongoose.Schema({
    filmName: {
        type: String,
        required: true,
    },
    googleID:{
        type: String,
        required: true,
    },
    completed:{
        type:Boolean,
        required:true,
    },
    image:{
        type:String,
        required:false,
    }
})

module.exports = mongoose.model('Films',FilmsSchema)