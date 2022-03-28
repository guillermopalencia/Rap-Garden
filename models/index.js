const mongoose = require('mongoose')
const AlbumSchema = require('./Album')
const ArtistSchema = require('./Artist')
const SongSchema = require('./Song')
const ListenLaterSchema = require('./ListenLater')

const Album = mongoose.model('albums', AlbumSchema)
const Artist = mongoose.model('artists', ArtistSchema)
const Song = mongoose.model('songs', SongSchema)
const ListenLater = mongoose.model('listenlater', ListenLaterSchema)

module.exports = {
  Album,
  Artist,
  Song,
  ListenLater
}
