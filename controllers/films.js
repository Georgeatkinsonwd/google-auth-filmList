const Films = require('../models/Films')

module.exports = {
    getFilms: async (req,res)=>{
        try {
            const filmItems = await Films.find({googleID:req.user.googleID})
            res.render('films.ejs',{films: filmItems,user: req.user})
        } catch (err) {
            console.log(err)
        }
        
    },
    createFilm: async(req,res)=>{
        try {
            await Films.create({filmName: req.body.filmItem,completed:false, googleID: req.user.googleID})
            console.log('film added')
            res.redirect('/films')
        } catch (error) {
            console.log(error)
        }
    },
    deleteFilm: async(req,res)=>{
        try {
            await Films.findOneAndDelete({_id:req.body.filmId})
            console.log('Delete Film')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    },
    markWatched: async(req,res)=>{
        try {
            await Films.findOneAndUpdate({_id:req.body.filmId},{
                completed:true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        } catch (error) {
            console.log(error)
        }
    },
    markUnwatched: async(req,res)=>{
        try {
            await Films.findOneAndUpdate({_id:req.body.filmId},{
                completed:false
            })
            console.log('Marked not complete')
            res.json('Marked not Complete')
        } catch(error) {
            console.log(error)
        }
    }
    
}