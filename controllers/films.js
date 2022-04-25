const Films = require('../models/Films')

module.exports = {
    getFilms: async (req,res)=>{
        console.log(req.user)
        try {
            const filmItems = await Films.find({googleID:req.user.googleID})
            res.render('films.ejs',{films: filmItems,user: req.user})
        } catch (err) {
            console.log(err)
        }
        
    },
    createFilm: async(req,res)=>{
        try {
            await Films.create({filmName: req.body.filmItem, googleID: req.user.googleID})
            console.log('film added')
            res.redirect('/films')
        } catch (error) {
            console.log(error)
        }
    },
    deleteFilm: async(req,res)=>{
        console.log(req.body.filmId)
        try {
            await Films.findOneAndDelete({_id:req.body.filmId})
            console.log('Delete Film')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    }
}