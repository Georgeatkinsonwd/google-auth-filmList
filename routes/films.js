const { application } = require('express')
const express = require('express')
const router = express.Router()
const filmsController = require('../controllers/films')
const {ensureAuth, ensureGuest} = require('../middleware/auth')

router.get('/', ensureAuth,filmsController.getFilms)

router.post('/createFilm', filmsController.createFilm)

router.delete('/deleteFilm',filmsController.deleteFilm)

module.exports = router