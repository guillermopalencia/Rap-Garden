const { Router } = require('express')
const controllers = require('../controllers/MusicController')
const router = Router()

router.get('/', (req, res) => res.send('This is root'))

router.get('/songs', controllers.allSongs)

module.exports = router
