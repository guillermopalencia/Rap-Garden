const { Router } = require('express')
const controllers = require('../controllers/MusicController')
const router = Router()

router.get('/', (req, res) => res.send('This is root'))

router.get('/songs', controllers.allSongs)

router.get('/albums', controllers.allAlbums)

router.get('/albums/:id', controllers.getAlbum)

router.get('/songs/:id', controllers.getSongs)

router.post('/songs/:id', controllers.getSongs)

router.get('/albums/songs/:id', controllers.getSongsByAlbum)

router.get('/artists', controllers.allArtist)

router.post('/artists', controllers.createArtist)

router.get('/artist/albums/:id', controllers.getAlbumsByArtist)

router.put('/updateartist/:id', controllers.updateArtist)

module.exports = router
