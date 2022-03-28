const mongoose = require('mongoose')
const AlbumSchema = require('./Album')
const ArtistSchema = require('./Artist')
const SongSchema = require('./Song')

const Album = mongoose.model('albums', AlbumSchema)
const Artist = mongoose.model('artists', ArtistSchema)
const Song = mongoose.model('songs', SongSchema)

module.exports = {
  Album,
  Artist,
  Song
}
