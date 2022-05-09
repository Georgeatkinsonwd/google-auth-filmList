const Films = require('../models/Films')
const fetch = require('node-fetch')


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
            const title = req.body.filmTitle
            const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_91k1mh3e/${title}`)
            const data = await response.json()
            const filmImg = data.results[0].image
            const filmName = data.results[0].title
            await Films.create({filmName: filmName,completed:false, googleID: req.user.googleID, filmImg: filmImg})
            console.log('film added')
            res.redirect('/films')
        } catch (error) {
            console.log(error)
            res.render('404.ejs')
        }
    },
    deleteFilm: async(req,res)=>{
        try {
            await Films.findOneAndDelete({_id:req.body.filmId})
            console.log('Deleted Film')
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
